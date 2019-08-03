/* eslint-disable complexity */
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.

let message = ["Hello, I'm Cris!", "A fullstack developer", "with a background", "in design."]

module.exports = message

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        if (value > this.value) {
            if (this.right === null) {
                this.right = new BST(value)
            } else {
                this.right.insert(value)
            }
        } else {
            if (this.left === null) {
                this.left = new BST(value)
            } else {
                this.left.insert(value)
            }
        }
        return this;
    }

    contains(value) {
        // Write your code here.
        if (value < this.value) {
            if (this.left === null) {
                return false
            } else {
                return this.left.contains(value)
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false
            } else {
                return this.right.contains(value)
            }
        } else {
            return true
        }
    }

    remove(value, parentNode = null) {
        // Write your code here.
        // Do not edit the return statement of this method.
        let currentNode = this
        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else {
                if (currentNode.left && currentNode.right) { // Case for two child nodes
                    // 				looking smalles left-most value of the right
                    currentNode.value = currentNode.right.getMinValue()
                    // 				currentNode.value = smallest value of right subtree
                    currentNode.right.remove(currentNode.value, currentNode)
                } else if (!parentNode) { //case for the Parent Node
                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value
                        currentNode.right = currentNode.left.right
                        currentNode.left = currentNode.left.left
                    } else if (currentNode.right !== null) {
                        currentNode.value = currentNode.right.value
                        currentNode.left = currentNode.right.left
                        currentNode.right = currentNode.right.right
                    } else {
                        currentNode.value = null
                    }
                } else if (parentNode.left === currentNode) { //Node to remove is in Left subtree
                    parentNode.left = currentNode.left ? currentNode.left : currentNode.right
                } else if (parentNode.right === currentNode) { //Node to remove is in Right subtree
                    parentNode.right = currentNode.left ? currentNode.left : currentNode.right
                }
                break
            }
        }

        return this
    }

    getMinValue() {
        let currentNode = this
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }
}

// Do not edit the line below.
exports.BST = BST;
