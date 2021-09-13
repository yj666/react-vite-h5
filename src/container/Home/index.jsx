import React, { useEffect } from 'react'
import { Icon } from 'zarm'
import { post } from '@/utils'

import s from './style.module.less'

const Home = () => {
  useEffect(() => {
    getBillList() // 初始化
  }, [])
  const getBillList = async () => {
    const { data } = await post('/list');
    
  }
  return <div className={s.home}>
    <div className={s.header}>
      <div className={s.dataWrap}>
        <span className={s.expense}>总支出：<b>¥ 200</b></span>
        <span className={s.income}>总收入：<b>¥ 500</b></span>
      </div>
      <div className={s.typeWrap}>
        <div className={s.left}>
          <span className={s.title}>类型 <Icon className={s.arrow} type="arrow-bottom" /></span>
        </div>
        <div className={s.right}>
          <span className={s.time}>2022-06<Icon className={s.arrow} type="arrow-bottom" /></span>
        </div>
      </div>
    </div>
  </div>
}

export default Home