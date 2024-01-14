import React, { Component} from "react";

interface ItemProps {
    image: string;
    name: string;
    new_price: number;
    old_price: number;
    id: number;
}

export class Item extends Component<ItemProps> {
    constructor(props: ItemProps) {
        super(props);
    }


    render(){
        return (
            <div>
                <div>
                    <img src={this.props.image}  alt={this.props.name} />
                    <p>{this.props.name}</p>
                    <div className='flex gap-5'>
                        <div>${this.props.new_price}</div>
                        <div className='line-through opacity-40'>${this.props.old_price}</div>
                    </div>
                </div>
            </div>

        );
    }
}
// this class return to popular class