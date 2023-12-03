class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // some methods to the LinkedList class for functionality
    add(data) {
        // Adding to the end of the list, similar to Insert Node at End function
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    insertAt(data, index) {
        // Adding element in the middle, similar to our Insert In Middle function from above
        if (index > 0 && index > this.size) {
            return false;
        }

        const node = new Node(data);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current, previous;
            let i = 0;

            current = this.head;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            node.next = current;
            previous.next = node;
        }

        this.size++;
    }

    removeFrom(index) {
        if (index > 0 && index > this.size) {
            return -1;
        }

        let current, previous;
        let i = 0;

        current = this.head;
        previous = current;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            previous.next = current.next;
        }

        this.size--;

        return current.data;
    }

    removeElement(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }

                this.size--;

                return current.data;
            }

            previous = current;
            current = current.next;
        }

        return -1;
    }

    indexOf(data) {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return count;
            }

            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        let current = this.head;
        let str = '';

        while (current) {
            str += current.data + ' ';
            current = current.next;
        }

        console.log(str);
    }
}  // End of Linked List methods

// Example usage:
const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

list.printList(); // Output: 1 2 3

list.insertAt(4, 2);

list.printList(); // Output: 1 2 4 3

list.removeFrom(2);

list.printList(); // Output: 1 2 3




