import { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>aaaaa!</Text>
        <Navigator url="/__pages/index/index">去容器页面</Navigator>
      </View>
    )
  }
}
