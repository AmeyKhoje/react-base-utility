import 'assets/style.scss';
import { useMemo } from 'react';
import { Button, Flex, Input } from './components';
import { FiActivity } from 'react-icons/fi';
import Container from './components/bare/container/Container';
import './indexs.scss';
import useWindowResize from './hooks/useWindowResize';
import { WindowSizeInterface } from './hooks/Hooks.interface';
// import StyledDiv from './components/bare/styled-div/StyledDiv';
// import { getTodaysDate } from 'web-utility-helpers/';

const App = () => {
  const data: WindowSizeInterface = useWindowResize();
  console.log(data);

  return (
    <div>
      <div
        style={{
          marginBottom: '10rem',
        }}
      >
        <Input />
      </div>
      <Container>
        <Flex
          config={{
            styles: {
              alignItems: 'center',
            },
          }}
        >
          <Button
            title="Button Here"
            extras={{
              bg: 'red',
              textColor: 'white',
              hoverBg: 'white',
              hoverTextColor: 'red',
            }}
          />
          <Button
            title="Button Here"
            icon={{
              svg: FiActivity,
              side: 'right',
              style: {
                width: '2rem',
                height: '2rem',
              },
            }}
            extras={{
              bg: 'red',
              textColor: 'white',
              hoverBg: 'white',
              hoverTextColor: 'red',
            }}
            className="test-button"
          />
          <Button
            title="Button Here"
            icon={{
              svg: FiActivity,
              side: 'right',
              style: {
                width: '2rem',
                height: '2rem',
              },
            }}
            extras={{
              bg: 'red',
              textColor: 'white',
              hoverBg: 'white',
              hoverTextColor: 'red',
            }}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default App;
