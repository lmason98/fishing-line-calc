import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';

const SelectInput = (props: any) => {
    const [value, setValue] = useState()

    useEffect(() => {
        if (props.options.length > 0)
            setValue(props.options[0].value)
    }, [])

    const onSelect = (value: any, _) => {
        setValue(value)
        props.onSelect(value)
    }

    return (
      <Picker
        selectedValue={value}
        onValueChange={onSelect}
      >
          {props.options.map((opt: any, key: number) => (
              <Picker.Item key={key} label={opt.label} value={opt.label} />
          ))}
      </Picker>
    );
};

export default SelectInput;