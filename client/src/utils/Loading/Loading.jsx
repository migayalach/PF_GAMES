import React from 'react'
import loading from '../../assets/loading-neon.gif'
import styles from './utils.module.css'

const Loading = () => (
  <div className={styles.container}>
  <img src={loading} alt="loading" 
  className={styles.loading}
  />
  <p className={styles.loadingText}>We're loading...</p>
  </div>
)

export default Loading