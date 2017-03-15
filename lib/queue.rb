# frozen_string_literal: true

# A queue class
class Fifo
  # allocates space for items on our queue
  def initialize
    @store = []
  end

  # Is this queue empty?
  def empty?
    @store.empty?
  end

  # Adds items to the end of the queue
  # Returns self to allow method chaining
  def enqueue(value)
    @store.push(value)
    self
  end

  # Removes item from the front of the queue
  def dequeue
    @store.shift
  end
end
