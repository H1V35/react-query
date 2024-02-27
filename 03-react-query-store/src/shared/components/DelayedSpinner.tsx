import { Spinner } from '@nextui-org/react';
import { sleep } from '../../utils/sleep';
import React from 'react';

type DelayedSpinnerProps = {
  delay: number;
  size?: 'sm' | 'md' | 'lg';
};

export function DelayedSpinner({ delay, size = 'md' }: DelayedSpinnerProps) {
  const [showSpinner, setShowSpinner] = React.useState(false);

  React.useEffect(() => {
    const delaySpinner = async () => {
      await sleep(delay);
      setShowSpinner(true);
    };

    delaySpinner();
  }, [delay]);

  if (!showSpinner) return null;

  return <Spinner size={size} />;
}
