import React, {Component} from 'react';
import {Segment, Container} from 'semantic-ui-react';
import SortableTree from 'react-sortable-tree';

export default class SidebarItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{title: 'Chicken', children: [{title: 'Egg'}]}]
        }
    }

    render() {

        return (
            <div style={{padding: '25px 175px 25px 25px'}}>
                <h1>CS2010</h1>
                <h3>Data Structure & Algorithms II</h3>
                <p>But it also comes from my own American story. They had to file for bankruptcy, and that's when Ashley decided that she had to do something to help her mom. Perhaps somebody told her along the way that the source of her mother's problems were blacks who were on welfare and too lazy to work, or Hispanics who were coming into the country illegally. The relationship between Islam and the West includes centuries of co-existence and cooperation, but also conflict and religious wars. The question is whether we spend that time focused on what pushes us apart, or whether we commit ourselves to an effort - a sustained effort - to find common ground, to focus on the future we seek for our children, and to respect the dignity of all human beings. </p>
                <div style={{height: 400}}>
                    <SortableTree treeData={this.state.treeData} onChange={treeData => this.setState({treeData})}
                                  canDrag={false}/>
                </div>
            </div>
        )
    }
}