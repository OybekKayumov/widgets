import React, { Component, useState } from "react";

class AccordionClass extends React.Component {
  state = { activeIndex: 0 };

  onTitleClicked(index) {
    // console.log('title was clicked');
    this.setState({
      activeIndex: index,
    })
  }

  renderItems() {
    return this.propsitrems.map((item, index) => {
      return (
        <>
          <div 
            className="title active"
            onClick={() => this.onTitleClicked(index)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="contnt active">
            <p>{item.content}</p>
          </div>
        </>
      )
    })
  }
  render() {
    return (
      <div className="ui styled accordian">
        {this.renderItems()}
        <h1>{this.state.activeIndex}</h1>
      </div>
    )
  }
}

const Accordion = ({ items }) => {
  // hook, vN143
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    // console.log('title clicked', index );
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div 
          className={ `title ${active}` } 
          onClick={() => onTitleClick(index)}
          
          // onClick={() => console.log('title clicked', index )}
          //todo: if to use like not arrow function, when page refreshed, we will have all list rendered without pressing on a list
          // onClick={onTitleClick(index)} vN141
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={ `content ${active}` }>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {items.length}
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  )
}

export default Accordion;


