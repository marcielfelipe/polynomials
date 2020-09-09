import React from 'react';
import '../../global.css';
import './styles.css'

export default function Home(){
    const list = LinkedList();
    list.add(1,'ab');
    list.add(3,'ab');
    list.print();
    console.log(list.sum(1));

    function LinkedList(){
        let head = null;
        let length = 0;
    
        const Node = (coefficient, exponent) => {
            return {
                coefficient,
                exponent,
                next:null
            }
        }
        const add = (c, e) => {
            if(!head) {
                head = Node(c,e)
                length++
                return head
            }
            let node = head;
    
            while(node.next){
                node = node.next;
            }
            node.next = Node(c,e);
            length++;
            return node.next
        }
        const sum = (index) => {
            if(length === 0){
                return null
            }
            let node = head;
            let result = 0;
            let count = 0;
            while(count < index && node.next){
                result += node.coefficient
                count++
            }
            return result
        }
    }
    

    
    return(
        <ul>
            {list.map(item=>(
                <li>{item}</li>
            ))}
        </ul>
    );
    
}