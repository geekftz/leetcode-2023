// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 !== null) {
    return list2;
  } else if (list1 !== null && list2 === null) {
    return list1;
  } else if (list1 === null && list2 === null) {
    return null;
  }

  const head1 = new ListNode();
  head1.next = list1;

  let prev1 = head1;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      const next2 = list2.next;

      prev1.next = list2;
      list2.next = list1;

      prev1 = list2;
      list2 = next2;
    } else {
      prev1 = list1;
      list1 = list1.next;
    }
  }

  if (list1) {
    prev1.next = list1;
  } else if (list2) {
    prev1.next = list2;
  }

  return head1.next;
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

// const list1 = {
//   val: 2,
//   next: null,
// };

// const list2 = {
//   val: 1,
//   next: null,
// };

// const list2 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

let res = mergeTwoLists(list1, list2);

while (res) {
  const { val } = res;
  console.log("🚀 --> file: index.js:94 --> val", val);

  res = res.next;
}
