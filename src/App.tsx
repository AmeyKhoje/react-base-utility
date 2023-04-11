import 'assets/style.scss';
import { useMemo } from 'react';
import { Button, Flex, Input } from './components';
import { FiActivity } from 'react-icons/fi';
import Container from './components/bare/container/Container';
import './indexs.scss';
// import { getTodaysDate } from 'web-utility-helpers/';

const App = () => {
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
        <Flex>
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
