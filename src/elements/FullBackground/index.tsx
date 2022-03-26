import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { FullBackgroundContainer } from './styles';

type FullBackgroundProps = {
  backgroundState: boolean;
  onCloseFunction: () => void;
};

const FullBackground: React.FC<FullBackgroundProps> = ({
  backgroundState,
  onCloseFunction,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={backgroundState}
      timeout={400}
      classNames="backgroundContent"
      unmountOnExit
    >
      <FullBackgroundContainer
        ref={nodeRef}
        onClick={() => onCloseFunction()}
      />
    </CSSTransition>
  );
};

export default FullBackground;
