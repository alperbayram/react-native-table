React native package for creating tables.

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

<div>
<img src="gifs/android.gif" alt="android" style="width:240px;height:500px;">
<img src="gifs/ios.gif" alt="ios" style="width:240px;height:500px;">
</div>

## Installation

```sh
npm install simple-react-native-tables
```

## Usage

```js
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Table, Tr, Td, Head, Body } from 'simple-react-native-tables';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ display: 'flex', flexDirection: 'column' }}
        horizontal={false}
      >
        <ScrollView horizontal={true}>
          <Table widths={[150, 150, 160]}>
            <Head style={{ backgroundColor: '#F9FAFB' }}>
              <Tr>
                <Td style={styles.Td}>
                  <Text style={styles.tableHeadertext}>First Name</Text>
                </Td>
                <Td style={styles.Td}>
                  <Text style={styles.tableHeadertext}>Last Name</Text>
                </Td>
                <Td style={styles.Td}>
                  <Text style={styles.tableHeadertext}>Phone Number</Text>
                </Td>
              </Tr>
            </Head>
            <Body>
              <Tr style={styles.Tr}>
                <Td style={styles.Td}>
                  <Text>Ibrahim</Text>
                </Td>
                <Td style={styles.Td}>
                  <Text>Kazımov</Text>
                </Td>
                <Td style={styles.Td}>
                  <Text>+9999999999</Text>
                </Td>
              </Tr>
              <Tr style={styles.Tr}>
                <Td style={styles.Td}>
                  <Text>Alper</Text>
                </Td>
                <Td style={styles.Td}>
                  <Text>Bayram</Text>
                </Td>
                <Td style={styles.Td}>
                  <Text>+123231123</Text>
                </Td>
              </Tr>
            </Body>
          </Table>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
  },
  Td: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  Tr: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  tableHeadertext: {
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT


