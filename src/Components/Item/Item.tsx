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
            <div className='fuc'>
                <div>
                    <img src={this.props.image}  alt={this.props.name} />
                    <p>{this.props.id}</p>
                    <p>{this.props.name}</p>
                    <div>
                        <div>${this.props.new_price}</div>
                        <div>${this.props.old_price}</div>
                    </div>
                </div>


            </div>

        );
    }
}
