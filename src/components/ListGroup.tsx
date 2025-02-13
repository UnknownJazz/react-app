import { Fragment, useState } from "react";

interface Props {
    items: string[],
    heading: string
    onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props) {  
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return  (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => 
                <li 
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                    key={item} 
                    onClick={() => {
                            if (selectedIndex != index) {
                                setSelectedIndex(index)
                                onSelectItem(item)
                            } else {
                                setSelectedIndex(-1)
                            }
                        }
                    }
                >
                        {item}
                </li>
            )}
            </ul>
        </Fragment>
    );
}

export default ListGroup;