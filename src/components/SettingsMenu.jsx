import React from 'react';
import { useState } from 'react';
import Button from './Button';
import Counter from './Counter';
import FlexWrapper from './FlexWrapper';
import classes from './SettingsMenu.module.css';

const SettingsMenu = (props) => {
  const { onSetHeader, onSetFooter, footerFontSize, headerFontSize } = props;
  const [fontSizeBoth, setFontSizeBoth] = useState(14);
  const onApplyBoth = () => {
    onSetHeader(fontSizeBoth);
    onSetFooter(fontSizeBoth);
  };
  const onChangeBoth = (e) => {
    const value = +e.target.value;
    console.log(1);
    if (value >= 0) {
      setFontSizeBoth(value);
    } else {
      setFontSizeBoth(0);
    }
  };
  return (
    <div className={classes.root}>
      <FlexWrapper>
        Header font-size: <Counter onChange={onSetHeader} startCounter={footerFontSize} />
      </FlexWrapper>
      <FlexWrapper>
        Footer font-size: <Counter onChange={onSetFooter} startCounter={headerFontSize} />
      </FlexWrapper>
      <FlexWrapper>
        Both font-size: <input onChange={onChangeBoth} type="number" value={fontSizeBoth} />
        <Button onClick={onApplyBoth}>Apply for both</Button>
      </FlexWrapper>
    </div>
  );
}

export default SettingsMenu;