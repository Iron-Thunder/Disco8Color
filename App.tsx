import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [bgcolor, setBGColor] = useState('#000000');

  // const [bgcolor1, setBGColor1] = useState('#ffffff');
  // const [bgcolor2, setBGColor2] = useState('#ffffff');
  // const [bgcolor3, setBGColor3] = useState('#ffffff');
  // const [bgcolor4, setBGColor4] = useState('#ffffff');
  // const [bgcolor5, setBGColor5] = useState('#ffffff');
  // const [bgcolor6, setBGColor6] = useState('#ffffff');
  // const [bgcolor7, setBGColor7] = useState('#ffffff');
  // const [bgcolor8, setBGColor8] = useState('#ffffff');
  // const [bgcolor9, setBGColor9] = useState('#ffffff');
  // const [bgcolor10, setBGColor10] = useState('#ffffff');
  // const [bgcolor11, setBGColor11] = useState('#ffffff');
  // const [bgcolor12, setBGColor12] = useState('#ffffff');
  // const [bgcolor13, setBGColor13] = useState('#ffffff');
  // const [bgcolor14, setBGColor14] = useState('#ffffff');
  // const [bgcolor15, setBGColor15] = useState('#ffffff');
  // const [bgcolor16, setBGColor16] = useState('#ffffff');

  const [boxColor, setBoxColor] = useState<string[]>([
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
  ]);
  const [start, setStart] = useState<Boolean>(false);

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBGColor(color);
  };

  // const generateColor1 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor1(color);
  // };

  // const generateColor2 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor2(color);
  // };

  // const generateColor3 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor3(color);
  // };

  // const generateColor4 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor4(color);
  // };

  // const generateColor5 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor5(color);
  // };

  // const generateColor6 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor6(color);
  // };
  // const generateColor7 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor7(color);
  // };
  // const generateColor8 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor8(color);
  // };
  // const generateColor9 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor9(color);
  // };
  // const generateColor10 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor10(color);
  // };
  // const generateColor11 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor11(color);
  // };
  // const generateColor12 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor12(color);
  // };
  // const generateColor13 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor13(color);
  // };
  // const generateColor14 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor14(color);
  // };
  // const generateColor15 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor15(color);
  // };
  // const generateColor16 = () => {
  //   const hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setBGColor16(color);
  // };

  // useEffect(() => {
  //   if (start) {
  //     setInterval(() => handleChangeColor(), 200);
  //   }
  // }, [start]);

  // const handleToggleStart = () => {
  //   setStart(!start);
  // };

  // const handleChangeColor = () => {
  //   generateColor1();
  //   generateColor2();
  //   generateColor3();
  //   generateColor4();
  //   generateColor5();
  //   generateColor6();
  //   generateColor7();
  //   generateColor8();
  //   generateColor9();
  //   generateColor10();
  //   generateColor11();
  //   generateColor12();
  //   generateColor13();
  //   generateColor14();
  //   generateColor15();
  //   generateColor16();
  // };
  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  useEffect(() => {
    setInterval(()=>{
      let NewColor:string[] = []
      for(let i = 0; i < 10; i++) {
        const color = generateRandomColor();
        NewColor.push(color)
      }
      setBoxColor(NewColor)

    },200)
  },[]);

  return (
    <>
      <StatusBar backgroundColor={bgcolor} />

      <View style={[styles.container, {backgroundColor: 'black'}]}>
        <View style={styles.boxesMain}>
          {[0, 1, 2, 3, 4].map((val, i) => {
            return (
              <View style={styles.boxes} key={i}>
                <View
                  style={[styles.box, {backgroundColor: boxColor[i]}]}></View>
                <View
                  style={[
                    styles.box,
                    {backgroundColor: boxColor[4 + i]},
                  ]}></View>
              </View>
            );
          })}
          {/* <View style={styles.boxes}>
            <View style={[styles.box, {backgroundColor: bgcolor1}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor2}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor3}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor4}]}></View>
          </View>

          <View style={styles.boxes}>
            <View style={[styles.box, {backgroundColor: bgcolor5}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor6}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor7}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor8}]}></View>
          </View>

          <View style={styles.boxes}>
            <View style={[styles.box, {backgroundColor: bgcolor9}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor10}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor11}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor12}]}></View>
          </View>

          <View style={styles.boxes}>
            <View style={[styles.box, {backgroundColor: bgcolor13}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor14}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor15}]}></View>
            <View style={[styles.box, {backgroundColor: bgcolor16}]}></View>
          </View> */}
        </View>

        {/* <TouchableOpacity onPress={handleToggleStart}>
          <View style={[styles.actionBtn, styles.elevated]}>
            <Text style={styles.actionText}>Press Me</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  actionBtn: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1.5,
    backgroundColor: '#6A1B4D',
    paddingHorizontal: 30,
    paddingVertical: 13,
  },
  elevated: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
  },

  boxesMain: {
    // flex: 3,
    flexDirection: 'column',
  },
  boxes: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  box: {
    width: 190,
    height: 155,
    // backgroundColor: 'black',
    marginHorizontal: 1,
  },
});
