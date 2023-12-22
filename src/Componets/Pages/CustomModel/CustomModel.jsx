import React, { useState, useEffect } from 'react';

const CustomModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Reset to enable scrolling when unmounting
    };
  }, [isOpen]);

  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-model-container">
      <button onClick={toggleModel}>Toggle Model</button>
    <div>
        <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2>
        <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2> <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2>
    </div>
      {isOpen && (
        <div className="custom-model-overlay">
          <div className="custom-model-content">
            <div className="header">
          <span className='title-text'> Title Heading</span>    <span className="close-btn" onClick={toggleModel}>&times;</span>
            </div>
            <div className="middle-content">
              <p>This is the modal content.</p>
              <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2><h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2><h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2><h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2><h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2><h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2><h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis quidem impedit ipsa est magni harum labore ipsam, accusamus beatae ullam eos qui commodi dolores illo voluptatum incidunt rem dolorem!
        </h2>
            </div>
            <div className="footer">
              <button>Button 1</button>
              <button>Button 2</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModel;
