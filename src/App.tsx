import React, { ReactElement, useEffect, useRef, useState } from "react";
import { SafeAreaView, TextInput } from "react-native";

export const App = (): ReactElement => {
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);

  const [code, setCode] = useState({0:'', 1:'', 2:'', 3: ''})

  useEffect(() => {
    if(code[3] !== '') {
      console.log('submit form')
    } else if(code[2] !== '') {
      inputRef4.current?.focus()
    } else if(code[1] !== '') {
      inputRef3.current?.focus()
    } else if(code[0] !== '') {
      inputRef2.current?.focus()
    } else {
      inputRef1.current?.focus()
    }
  }, [code])


  return (
    <SafeAreaView>
      <TextInput maxLength={1} ref={inputRef1} onChangeText={(value) => setCode({...code, 0: value})} style={{ margin: 5, backgroundColor: '#ebebeb' }} />
      <TextInput maxLength={1} ref={inputRef2} onChangeText={(value) => setCode({...code, 1: value})} style={{ margin: 5, backgroundColor: '#ebebeb' }} />
      <TextInput maxLength={1} ref={inputRef3} onChangeText={(value) => setCode({...code, 2: value})} style={{ margin: 5, backgroundColor: '#ebebeb' }} />
      <TextInput maxLength={1} ref={inputRef4} onChangeText={(value) => setCode({...code, 3: value})} style={{ margin: 5, backgroundColor: '#ebebeb' }} />
    </SafeAreaView>
  )
}