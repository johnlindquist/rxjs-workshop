let consumer1 = {
  update(value) {
    console.log("Consumer 1", value)
  }
}
let consumer2 = {
  update(value) {
    console.log("Consumer 2", value)
  }
}
let consumer3 = {
  update(value) {
    console.log("Consumer 3", value)
  }
}

let producer = {
  consumers: [],

  addConsumer(consumer) {
    this.consumers.push(consumer)
  },

  update(value) {
    this.consumers.forEach(consumer => {
      consumer.update(value)
    })
  }
}

producer.addConsumer(consumer1)
producer.addConsumer(consumer2)
producer.addConsumer(consumer3)

producer.update("John")
