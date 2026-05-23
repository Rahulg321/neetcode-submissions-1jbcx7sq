// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//     pub val: i32,
//     pub left: Option<Rc<RefCell<TreeNode>>>,
//     pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//     #[inline]
//     pub fn new(val: i32) -> Self {
//         TreeNode {
//             val,
//             left: None,
//             right: None,
//         }
//     }
// }

use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        
        // if the node exists
        if let Some(node) = root.as_ref(){
            let mut node = node.borrow_mut();
            let left = node.left.take();
            let right = node.right.take();

            node.left = right; 
            node.right = left; 


            Self::invert_tree(node.left.clone());
            Self::invert_tree(node.right.clone());

        }
        
        root

    }
}
