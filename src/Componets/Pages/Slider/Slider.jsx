import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export default function Slider() {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const items = [
    'Item 1 with variable content',
    'Item 2 with longer content',
    'Item 3',
    'Item 4 is devel', /* Add more items */
    'Item 5',
    'Item 6',
    // Add more items as needed
  ];



  return (
    <Container>
      <Row>
        <Col>
          <div className="Slider_Wrapper">
           
              <div  className="arrow left">
                <FaAngleLeft />
              </div>
        

            <div className="Carousel_Container" ref={carouselRef}>
              <div
                className="Slider_Wrapper_main"
                
              >
                {items.map((item, index) => (
                  <div
                    className="Slider_Wrapper_main-item"
                    key={index}
                    style={{ flex: `0 0 ${itemWidth}px` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

         
              <div className="arrow right">
                <FaAngleRight />
              </div>
         
          </div>
        </Col>
      </Row>
    </Container>
  );
}
