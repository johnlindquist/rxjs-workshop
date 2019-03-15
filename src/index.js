let consumer1 = {
  update(value) {
    if (!this.done) {
      console.log("Consumer 1", value)
    }
  }
}

let consumer2 = {
  update(value) {
    if (!this.done) {
      console.log("Consumer 2", value)
    }
  }
}

function connect(consumer) {
  return {
    done: false,
    update(value) {
      if (!this.done) {
        consumer.update(value)
      }
    }
  }
}

let producer = {
  connections: [],

  addConsumer(consumer) {
    this.connections.push(connect(consumer))
  },

  update(value) {
    this.connections.forEach(connection => {
      connection.update(value)
    })
  },
  done() {
    this.connections.forEach(connection => {
      connection.done = true
    })
  }
}

producer.addConsumer(consumer1)
producer.addConsumer(consumer2)

producer.update("John")
producer.done()
producer.update("Mindy")
