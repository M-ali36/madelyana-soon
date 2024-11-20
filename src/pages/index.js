import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <div className={styles.backgroundVideoContainer}>
        <video autoplay="true" muted="true" loop="true" id="background-video" className={styles.backgroundVideo}>  
          <source src="videos/01.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
        <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 163 46" title="Madelyana">
          <g>
            <path fill="currentColor" d="M14.19,31.03c-0.58,0.93-1.08,1.6-1.51,2.02c-0.43,0.42-0.79,0.65-1.08,0.7c-0.29,0.05-0.49-0.07-0.6-0.36
              c-0.11-0.29-0.1-0.67,0.02-1.15c0.03-0.77,0.1-2.05,0.19-3.84c0.1-1.79,0.25-3.82,0.46-6.07c0.21-2.26,0.48-4.58,0.82-6.98
              s0.76-4.61,1.27-6.62c-1.15,1.92-2.21,3.93-3.17,6.02c-0.96,2.1-1.81,4.17-2.54,6.22C7.31,22.99,6.7,24.98,6.2,26.9
              s-0.87,3.68-1.13,5.28c-0.16,0.86-0.52,1.58-1.08,2.16c-0.56,0.58-1.14,0.97-1.75,1.18c-0.61,0.21-1.13,0.22-1.56,0.05
              c-0.43-0.18-0.58-0.6-0.46-1.27c0.61-3.52,1.49-6.78,2.64-9.79c1.15-3.01,2.38-5.76,3.67-8.26c1.3-2.5,2.58-4.74,3.86-6.72
              c1.28-1.98,2.35-3.7,3.22-5.14c0.32-0.54,0.74-1.05,1.27-1.51c0.53-0.46,1.08-0.86,1.66-1.18c0.58-0.32,1.14-0.56,1.68-0.72
              c0.54-0.16,1-0.22,1.37-0.17c0.37,0.05,0.62,0.22,0.74,0.5c0.13,0.29,0.06,0.74-0.19,1.34c-0.19,0.61-0.43,1.46-0.72,2.57
              s-0.6,2.34-0.94,3.72c-0.34,1.38-0.7,2.85-1.08,4.42c-0.38,1.57-0.76,3.13-1.13,4.68c-0.37,1.55-0.73,3.05-1.08,4.49
              s-0.66,2.74-0.91,3.89c1.44-2.34,2.89-4.66,4.34-6.96c1.46-2.3,2.9-4.47,4.34-6.5c1.44-2.03,2.84-3.87,4.2-5.52
              c1.36-1.65,2.65-2.99,3.86-4.03c1.22-1.04,2.34-1.72,3.36-2.04c1.02-0.32,1.94-0.18,2.74,0.43c0.48,0.35,0.63,1.01,0.46,1.97
              c-0.18,0.96-0.56,2.1-1.15,3.41c-0.59,1.31-1.33,2.77-2.21,4.37c-0.88,1.6-1.78,3.22-2.71,4.85c-0.93,1.63-1.82,3.24-2.69,4.82
              c-0.86,1.58-1.59,3.04-2.18,4.37c-0.59,1.33-0.97,2.46-1.13,3.41c-0.16,0.94,0,1.59,0.48,1.94c0.19,0.16,0.59,0.1,1.2-0.17
              c0.61-0.27,1.29-0.66,2.04-1.15c0.75-0.5,1.5-1.06,2.23-1.68c0.74-0.62,1.33-1.22,1.78-1.8c0.38-0.48,0.75-0.8,1.1-0.96
              c0.35-0.16,0.63-0.21,0.84-0.14c0.21,0.06,0.31,0.24,0.31,0.53c0,0.29-0.16,0.67-0.48,1.15c-0.26,0.38-0.7,0.94-1.32,1.66
              c-0.62,0.72-1.35,1.5-2.18,2.33c-0.83,0.83-1.74,1.65-2.71,2.45c-0.98,0.8-1.94,1.47-2.88,2.02c-0.94,0.54-1.85,0.91-2.71,1.1
              c-0.86,0.19-1.6,0.06-2.21-0.38c-0.61-0.42-0.9-1.12-0.86-2.11c0.03-0.99,0.28-2.14,0.74-3.46c0.46-1.31,1.08-2.75,1.85-4.32
              c0.77-1.57,1.58-3.14,2.45-4.73c0.86-1.58,1.73-3.14,2.59-4.66c0.86-1.52,1.6-2.9,2.21-4.13c0.61-1.23,1.05-2.27,1.32-3.12
              c0.27-0.85,0.26-1.4-0.02-1.66c-0.38-0.32-0.98-0.12-1.78,0.6c-0.8,0.72-1.73,1.77-2.78,3.14c-1.06,1.38-2.18,2.96-3.36,4.75
              c-1.18,1.79-2.34,3.61-3.48,5.45c-1.14,1.84-2.21,3.59-3.22,5.26C15.66,28.56,14.83,29.94,14.19,31.03z"/>
            <path fill="currentColor" d="M49.52,26.13c0.38-0.48,0.74-0.81,1.08-0.98c0.34-0.18,0.61-0.23,0.82-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.32,0.51-0.9,1.23-1.73,2.16c-0.83,0.93-1.76,1.86-2.78,2.78c-1.02,0.93-2.07,1.74-3.14,2.42
              c-1.07,0.69-2.01,1.03-2.81,1.03c-0.61,0-0.95-0.51-1.03-1.54c-0.08-1.02,0.1-2.27,0.55-3.74c-0.67,0.77-1.38,1.51-2.11,2.23
              c-0.74,0.72-1.44,1.34-2.11,1.85c-0.67,0.51-1.3,0.9-1.9,1.15c-0.59,0.26-1.08,0.29-1.46,0.1c-0.48-0.22-0.78-0.76-0.91-1.61
              c-0.13-0.85-0.1-1.86,0.1-3.02c0.19-1.17,0.55-2.44,1.08-3.82c0.53-1.38,1.19-2.72,1.99-4.03c0.74-1.18,1.57-2.29,2.5-3.31
              c0.93-1.02,1.9-1.88,2.93-2.57c1.02-0.69,2.06-1.18,3.12-1.46s2.06-0.27,3.02,0.05c0.86,0.29,1.44,0.78,1.73,1.46
              c0.29,0.69,0.34,1.35,0.14,1.99c-0.19,0.64-0.57,1.17-1.13,1.58c-0.56,0.42-1.24,0.51-2.04,0.29c0.06-0.45,0.06-0.85,0-1.2
              c-0.06-0.35-0.29-0.59-0.67-0.72c-0.48-0.16-1.01-0.14-1.58,0.07c-0.58,0.21-1.16,0.53-1.75,0.96c-0.59,0.43-1.17,0.96-1.73,1.58
              c-0.56,0.62-1.08,1.29-1.56,1.99c-0.45,0.67-0.83,1.37-1.15,2.09s-0.56,1.4-0.72,2.04c-0.16,0.64-0.23,1.18-0.22,1.63
              c0.02,0.45,0.15,0.74,0.41,0.86c0.29,0.13,0.68,0.05,1.18-0.24c0.5-0.29,1.05-0.7,1.66-1.25c0.61-0.54,1.25-1.19,1.92-1.94
              c0.67-0.75,1.31-1.51,1.92-2.28c0.19-0.26,0.38-0.51,0.58-0.77c0.19-0.26,0.4-0.51,0.62-0.77c0.1-0.1,0.28-0.16,0.55-0.19
              c0.27-0.03,0.56-0.03,0.86,0c0.3,0.03,0.57,0.09,0.79,0.17c0.22,0.08,0.32,0.15,0.29,0.22c-0.35,0.61-0.71,1.28-1.08,2.02
              c-0.37,0.74-0.69,1.43-0.96,2.09c-0.27,0.66-0.47,1.23-0.6,1.73c-0.13,0.5-0.13,0.82,0,0.98c0.16,0.16,0.46,0.15,0.91-0.02
              c0.45-0.18,0.95-0.46,1.51-0.84c0.56-0.38,1.12-0.82,1.68-1.32C48.67,27.1,49.14,26.61,49.52,26.13z"/>
            <path fill="currentColor" d="M59.07,34.96c-0.83,0-1.36-0.59-1.58-1.78c-0.22-1.18-0.18-2.72,0.14-4.61c-0.74,0.86-1.51,1.73-2.33,2.59
              c-0.82,0.86-1.62,1.62-2.4,2.28c-0.78,0.66-1.52,1.15-2.21,1.49c-0.69,0.34-1.26,0.41-1.7,0.22c-0.51-0.22-0.83-0.76-0.96-1.61
              c-0.13-0.85-0.09-1.86,0.12-3.02c0.21-1.17,0.57-2.44,1.08-3.82c0.51-1.38,1.18-2.72,2.02-4.03c0.67-1.12,1.46-2.18,2.35-3.17
              c0.9-0.99,1.82-1.83,2.78-2.52c0.96-0.69,1.93-1.17,2.9-1.44c0.98-0.27,1.9-0.23,2.76,0.12c0.96-1.92,2.02-3.74,3.19-5.47
              C66.41,8.47,67.59,7,68.77,5.8c1.18-1.2,2.33-2.05,3.43-2.54c1.1-0.5,2.06-0.46,2.86,0.12c0.8,0.58,0.96,1.6,0.48,3.07
              c-0.48,1.47-1.4,3.2-2.76,5.18c-1.36,1.98-3.05,4.14-5.06,6.48c-2.02,2.34-4.13,4.66-6.34,6.96c-0.35,1.63-0.42,2.86-0.22,3.7
              c0.21,0.83,0.52,1.28,0.94,1.34c0.22,0.03,0.58-0.06,1.08-0.29c0.5-0.22,1.03-0.53,1.61-0.91c0.58-0.38,1.14-0.82,1.7-1.32
              c0.56-0.5,1.03-0.98,1.42-1.46c0.38-0.48,0.74-0.81,1.08-0.98c0.34-0.18,0.61-0.23,0.82-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.32,0.51-0.9,1.22-1.75,2.14c-0.85,0.91-1.8,1.82-2.86,2.74c-1.06,0.91-2.12,1.7-3.19,2.38
              C60.76,34.63,59.84,34.96,59.07,34.96z M52.55,30.02c0.22,0.1,0.54,0.04,0.96-0.17c0.42-0.21,0.89-0.53,1.42-0.96
              c0.53-0.43,1.09-0.96,1.68-1.58c0.59-0.62,1.18-1.27,1.75-1.94c0.32-1.22,0.7-2.46,1.15-3.72c0.45-1.26,0.94-2.55,1.49-3.86
              l0.24-0.43c-0.7-0.19-1.62,0.12-2.76,0.94c-1.14,0.82-2.38,2.22-3.72,4.2c-0.45,0.67-0.86,1.42-1.22,2.23
              c-0.37,0.82-0.66,1.6-0.89,2.35c-0.22,0.75-0.36,1.4-0.41,1.94C52.19,29.55,52.29,29.89,52.55,30.02z M63.54,18.16
              c-0.35,0.7-0.65,1.38-0.89,2.04c-0.24,0.66-0.46,1.3-0.65,1.94c1.15-1.38,2.31-2.78,3.48-4.22c1.17-1.44,2.22-2.83,3.14-4.18
              c0.93-1.34,1.67-2.61,2.23-3.79c0.56-1.18,0.82-2.24,0.79-3.17c-0.58,0.13-1.19,0.51-1.85,1.15c-0.66,0.64-1.34,1.46-2.04,2.47
              c-0.7,1.01-1.42,2.18-2.14,3.5C64.91,15.24,64.21,16.66,63.54,18.16z"/>
            <path fill="currentColor" d="M82.11,26.13c0.32-0.48,0.64-0.82,0.96-1.03c0.32-0.21,0.59-0.28,0.82-0.22c0.22,0.06,0.34,0.25,0.36,0.55
              c0.02,0.3-0.12,0.73-0.41,1.27c-0.19,0.35-0.52,0.87-0.98,1.56c-0.46,0.69-1.02,1.42-1.68,2.21c-0.66,0.78-1.41,1.54-2.26,2.28
              c-0.85,0.74-1.76,1.34-2.74,1.82s-2,0.77-3.07,0.86c-1.07,0.1-2.18-0.13-3.34-0.67c-0.93-0.45-1.58-1.16-1.97-2.14
              c-0.38-0.98-0.54-2.09-0.48-3.34c0.06-1.25,0.33-2.57,0.79-3.96c0.46-1.39,1.06-2.71,1.8-3.96c0.7-1.18,1.52-2.26,2.45-3.24
              c0.93-0.98,1.9-1.74,2.9-2.28c1.01-0.54,2.02-0.83,3.05-0.86c1.02-0.03,2,0.29,2.93,0.96c0.67,0.48,1.15,1.1,1.44,1.85
              c0.29,0.75,0.33,1.55,0.12,2.4c-0.21,0.85-0.69,1.69-1.44,2.52c-0.75,0.83-1.82,1.58-3.19,2.26c-0.61,0.29-1.23,0.49-1.87,0.6
              c-0.64,0.11-1.25,0.18-1.82,0.19c-0.58,0.02-1.11-0.01-1.61-0.07c-0.5-0.06-0.92-0.13-1.27-0.19c-0.1,0.51-0.19,1.06-0.29,1.66
              c-0.1,0.59-0.14,1.16-0.14,1.7c0,0.54,0.07,1.03,0.22,1.46c0.14,0.43,0.41,0.74,0.79,0.94c0.83,0.45,1.76,0.52,2.78,0.22
              c1.02-0.3,2.01-0.77,2.95-1.39s1.8-1.32,2.57-2.09S81.79,26.61,82.11,26.13z M78.61,18.98c-0.38-0.29-0.87-0.37-1.46-0.24
              c-0.59,0.13-1.2,0.42-1.82,0.86c-0.62,0.45-1.22,1.04-1.78,1.78c-0.56,0.74-0.98,1.55-1.27,2.45c0.32,0.03,0.79,0.05,1.42,0.05
              s1.4-0.18,2.33-0.53c0.9-0.35,1.58-0.74,2.06-1.15c0.48-0.42,0.81-0.83,0.98-1.25c0.18-0.42,0.21-0.8,0.1-1.15
              C79.05,19.44,78.87,19.17,78.61,18.98z"/>
            <path fill="currentColor" d="M83.03,34.96c-0.77,0-1.27-0.5-1.51-1.51c-0.24-1.01-0.26-2.33-0.05-3.96c0.21-1.63,0.62-3.47,1.22-5.52
              c0.61-2.05,1.38-4.11,2.3-6.19c0.61-1.41,1.3-2.79,2.06-4.15c0.77-1.36,1.58-2.65,2.42-3.86c0.85-1.22,1.71-2.31,2.59-3.29
              c0.88-0.98,1.74-1.76,2.57-2.35c0.83-0.59,1.62-0.97,2.38-1.13c0.75-0.16,1.43-0.03,2.04,0.38c0.8,0.58,0.95,1.6,0.46,3.07
              c-0.5,1.47-1.42,3.2-2.78,5.18c-1.36,1.98-3.05,4.14-5.06,6.48c-2.02,2.34-4.13,4.66-6.34,6.96c-0.35,1.63-0.42,2.86-0.19,3.7
              c0.22,0.83,0.54,1.28,0.96,1.34c0.22,0.03,0.58-0.06,1.06-0.29c0.48-0.22,1.01-0.53,1.58-0.91c0.58-0.38,1.14-0.82,1.7-1.32
              c0.56-0.5,1.03-0.98,1.42-1.46c0.38-0.48,0.75-0.81,1.1-0.98c0.35-0.18,0.63-0.23,0.84-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.32,0.51-0.91,1.22-1.78,2.14c-0.86,0.91-1.82,1.82-2.88,2.74c-1.06,0.91-2.12,1.7-3.19,2.38
              C84.71,34.63,83.79,34.96,83.03,34.96z M87.49,18.16c-0.32,0.7-0.61,1.38-0.86,2.04c-0.26,0.66-0.46,1.3-0.62,1.94
              c1.15-1.38,2.31-2.78,3.48-4.22c1.17-1.44,2.21-2.83,3.12-4.18c0.91-1.34,1.65-2.61,2.21-3.79c0.56-1.18,0.82-2.24,0.79-3.17
              c-0.58,0.13-1.19,0.51-1.85,1.15c-0.66,0.64-1.34,1.46-2.04,2.47c-0.7,1.01-1.42,2.18-2.14,3.5
              C88.86,15.24,88.16,16.66,87.49,18.16z"/>
            <path fill="currentColor" d="M107.12,26.13c0.38-0.48,0.74-0.81,1.08-0.98c0.34-0.18,0.61-0.23,0.82-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.19,0.29-0.61,0.85-1.25,1.68c-0.64,0.83-1.4,1.82-2.28,2.95c-0.88,1.14-1.85,2.37-2.9,3.7
              c-1.06,1.33-2.08,2.62-3.07,3.86c-0.8,0.99-1.54,1.92-2.23,2.78c-0.69,0.86-1.31,1.62-1.87,2.28c-0.56,0.66-1.04,1.16-1.44,1.51
              c-0.4,0.35-0.71,0.5-0.94,0.43c-0.26-0.06-0.37-0.4-0.34-1.01c0.03-0.61,0.18-1.38,0.46-2.33c0.27-0.94,0.64-2.02,1.1-3.22
              c0.46-1.2,0.98-2.43,1.56-3.7c0.58-1.26,1.2-2.53,1.87-3.79c0.67-1.26,1.36-2.44,2.06-3.53l1.25-1.97
              c-0.64,0.74-1.42,1.6-2.35,2.59c-0.93,0.99-1.88,1.93-2.86,2.81c-0.98,0.88-1.89,1.6-2.74,2.16c-0.85,0.56-1.48,0.78-1.9,0.65
              c-0.64-0.19-1.03-0.66-1.18-1.39c-0.14-0.74-0.07-1.63,0.22-2.69c0.29-1.06,0.74-2.22,1.34-3.48c0.61-1.26,1.34-2.51,2.18-3.74
              c0.85-1.23,1.77-2.4,2.76-3.5c0.99-1.1,2-2.04,3.02-2.81c0.7-0.51,1.36-0.86,1.97-1.03c0.61-0.18,1.09-0.22,1.44-0.14
              c0.35,0.08,0.53,0.25,0.53,0.5c0,0.26-0.26,0.58-0.77,0.96c-0.64,0.45-1.3,1.02-1.97,1.7c-0.67,0.69-1.31,1.42-1.92,2.21
              c-0.61,0.78-1.16,1.59-1.66,2.42c-0.5,0.83-0.9,1.61-1.22,2.33c-0.32,0.72-0.51,1.34-0.58,1.87c-0.06,0.53,0.05,0.89,0.34,1.08
              c0.13,0.1,0.43-0.06,0.91-0.46c0.48-0.4,1.06-0.95,1.73-1.66c0.67-0.7,1.4-1.5,2.18-2.38c0.78-0.88,1.56-1.76,2.33-2.64
              c0.77-0.88,1.47-1.7,2.11-2.47c0.64-0.77,1.17-1.39,1.58-1.87c0.48-0.54,1.07-0.96,1.78-1.25c0.7-0.29,1.37-0.48,1.99-0.58
              c0.62-0.1,1.13-0.1,1.51,0c0.38,0.1,0.46,0.26,0.24,0.48c-0.74,0.77-1.58,1.75-2.52,2.95c-0.94,1.2-1.9,2.47-2.88,3.82
              c-0.98,1.34-1.94,2.7-2.88,4.06c-0.94,1.36-1.78,2.59-2.5,3.7c-0.72,1.1-1.3,2.01-1.75,2.71c-0.45,0.7-0.66,1.07-0.62,1.1
              c0.06,0.03,0.28-0.1,0.65-0.38c0.37-0.29,0.82-0.69,1.37-1.2c0.54-0.51,1.14-1.09,1.78-1.73c0.64-0.64,1.26-1.27,1.85-1.9
              c0.59-0.62,1.14-1.21,1.63-1.75C106.49,26.88,106.86,26.45,107.12,26.13z"/>
            <path fill="currentColor" d="M123.39,26.13c0.38-0.48,0.74-0.81,1.08-0.98c0.34-0.18,0.61-0.23,0.82-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.32,0.51-0.9,1.23-1.73,2.16c-0.83,0.93-1.76,1.86-2.78,2.78c-1.02,0.93-2.07,1.74-3.14,2.42
              c-1.07,0.69-2.01,1.03-2.81,1.03c-0.61,0-0.95-0.51-1.03-1.54c-0.08-1.02,0.1-2.27,0.55-3.74c-0.67,0.77-1.38,1.51-2.11,2.23
              c-0.74,0.72-1.44,1.34-2.11,1.85c-0.67,0.51-1.3,0.9-1.9,1.15c-0.59,0.26-1.08,0.29-1.46,0.1c-0.48-0.22-0.78-0.76-0.91-1.61
              c-0.13-0.85-0.1-1.86,0.1-3.02c0.19-1.17,0.55-2.44,1.08-3.82c0.53-1.38,1.19-2.72,1.99-4.03c0.74-1.18,1.57-2.29,2.5-3.31
              c0.93-1.02,1.9-1.88,2.93-2.57c1.02-0.69,2.06-1.18,3.12-1.46s2.06-0.27,3.02,0.05c0.86,0.29,1.44,0.78,1.73,1.46
              c0.29,0.69,0.34,1.35,0.14,1.99c-0.19,0.64-0.57,1.17-1.13,1.58c-0.56,0.42-1.24,0.51-2.04,0.29c0.06-0.45,0.06-0.85,0-1.2
              c-0.06-0.35-0.29-0.59-0.67-0.72c-0.48-0.16-1.01-0.14-1.58,0.07c-0.58,0.21-1.16,0.53-1.75,0.96c-0.59,0.43-1.17,0.96-1.73,1.58
              c-0.56,0.62-1.08,1.29-1.56,1.99c-0.45,0.67-0.83,1.37-1.15,2.09s-0.56,1.4-0.72,2.04c-0.16,0.64-0.23,1.18-0.22,1.63
              c0.02,0.45,0.15,0.74,0.41,0.86c0.29,0.13,0.68,0.05,1.18-0.24c0.5-0.29,1.05-0.7,1.66-1.25c0.61-0.54,1.25-1.19,1.92-1.94
              c0.67-0.75,1.31-1.51,1.92-2.28c0.19-0.26,0.38-0.51,0.58-0.77c0.19-0.26,0.4-0.51,0.62-0.77c0.1-0.1,0.28-0.16,0.55-0.19
              c0.27-0.03,0.56-0.03,0.86,0c0.3,0.03,0.57,0.09,0.79,0.17c0.22,0.08,0.32,0.15,0.29,0.22c-0.35,0.61-0.71,1.28-1.08,2.02
              c-0.37,0.74-0.69,1.43-0.96,2.09c-0.27,0.66-0.47,1.23-0.6,1.73c-0.13,0.5-0.13,0.82,0,0.98c0.16,0.16,0.46,0.15,0.91-0.02
              c0.45-0.18,0.95-0.46,1.51-0.84c0.56-0.38,1.12-0.82,1.68-1.32C122.54,27.1,123.01,26.61,123.39,26.13z"/>
            <path fill="currentColor" d="M140.29,26.13c0.38-0.48,0.74-0.81,1.08-0.98c0.34-0.18,0.61-0.23,0.82-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.22,0.32-0.59,0.77-1.1,1.34c-0.51,0.58-1.11,1.19-1.8,1.85c-0.69,0.66-1.42,1.3-2.18,1.94
              c-0.77,0.64-1.53,1.2-2.28,1.68c-0.75,0.48-1.44,0.84-2.06,1.08c-0.62,0.24-1.13,0.28-1.51,0.12c-0.54-0.22-0.86-0.67-0.94-1.34
              c-0.08-0.67-0.02-1.45,0.19-2.33c0.21-0.88,0.54-1.81,0.98-2.78c0.45-0.98,0.93-1.9,1.44-2.76c0.51-0.86,1.01-1.62,1.49-2.28
              c0.48-0.66,0.88-1.1,1.2-1.32c-0.61,0.16-1.33,0.56-2.16,1.2c-0.83,0.64-1.69,1.42-2.57,2.33c-0.88,0.91-1.77,1.91-2.66,3
              c-0.9,1.09-1.7,2.14-2.4,3.17c-0.67,0.96-1.3,1.71-1.9,2.26c-0.59,0.54-1.02,0.78-1.27,0.72c-0.54-0.16-0.86-0.6-0.96-1.32
              c-0.1-0.72-0.02-1.6,0.22-2.64c0.24-1.04,0.63-2.18,1.18-3.43s1.18-2.48,1.92-3.7c0.74-1.22,1.56-2.37,2.47-3.46
              c0.91-1.09,1.86-1.98,2.86-2.69c0.7-0.51,1.27-0.86,1.7-1.03c0.43-0.18,0.77-0.24,1.01-0.19c0.24,0.05,0.38,0.2,0.41,0.46
              c0.03,0.26,0,0.56-0.1,0.91c-0.1,0.35-0.38,0.86-0.84,1.54c-0.46,0.67-0.98,1.37-1.54,2.09c-0.56,0.72-1.11,1.39-1.66,2.02
              c-0.54,0.62-0.94,1.08-1.2,1.37c-0.38,0.48-0.71,1.05-0.98,1.7c-0.27,0.66-0.44,1.13-0.5,1.42c0,0.06,0.19-0.14,0.58-0.6
              c0.38-0.46,0.9-1.07,1.56-1.82c0.66-0.75,1.42-1.59,2.28-2.52c0.86-0.93,1.75-1.84,2.66-2.74c0.91-0.9,1.82-1.73,2.74-2.5
              c0.91-0.77,1.75-1.36,2.52-1.78c0.38-0.19,0.78-0.3,1.18-0.34c0.4-0.03,0.74,0.02,1.03,0.17c0.29,0.14,0.49,0.37,0.6,0.67
              c0.11,0.3,0.09,0.68-0.07,1.13c-0.22,0.58-0.57,1.23-1.03,1.97c-0.46,0.74-0.98,1.5-1.54,2.3c-0.56,0.8-1.12,1.6-1.68,2.4
              c-0.56,0.8-1.04,1.56-1.44,2.28c-0.4,0.72-0.69,1.37-0.86,1.94c-0.18,0.58-0.15,1.02,0.07,1.34c0.13,0.19,0.41,0.22,0.84,0.07
              s0.9-0.4,1.42-0.77c0.51-0.37,1.04-0.79,1.58-1.27C139.44,27.09,139.9,26.61,140.29,26.13z"/>
            <path fill="currentColor" d="M156.56,26.13c0.38-0.48,0.74-0.81,1.08-0.98c0.34-0.18,0.61-0.23,0.82-0.17c0.21,0.06,0.31,0.24,0.31,0.53
              s-0.16,0.69-0.48,1.2c-0.32,0.51-0.9,1.23-1.73,2.16c-0.83,0.93-1.76,1.86-2.78,2.78c-1.02,0.93-2.07,1.74-3.14,2.42
              c-1.07,0.69-2.01,1.03-2.81,1.03c-0.61,0-0.95-0.51-1.03-1.54c-0.08-1.02,0.1-2.27,0.55-3.74c-0.67,0.77-1.38,1.51-2.11,2.23
              c-0.74,0.72-1.44,1.34-2.11,1.85c-0.67,0.51-1.3,0.9-1.9,1.15c-0.59,0.26-1.08,0.29-1.46,0.1c-0.48-0.22-0.78-0.76-0.91-1.61
              c-0.13-0.85-0.1-1.86,0.1-3.02c0.19-1.17,0.55-2.44,1.08-3.82c0.53-1.38,1.19-2.72,1.99-4.03c0.74-1.18,1.57-2.29,2.5-3.31
              c0.93-1.02,1.9-1.88,2.93-2.57c1.02-0.69,2.06-1.18,3.12-1.46s2.06-0.27,3.02,0.05c0.86,0.29,1.44,0.78,1.73,1.46
              c0.29,0.69,0.34,1.35,0.14,1.99c-0.19,0.64-0.57,1.17-1.13,1.58c-0.56,0.42-1.24,0.51-2.04,0.29c0.06-0.45,0.06-0.85,0-1.2
              c-0.06-0.35-0.29-0.59-0.67-0.72c-0.48-0.16-1.01-0.14-1.58,0.07c-0.58,0.21-1.16,0.53-1.75,0.96c-0.59,0.43-1.17,0.96-1.73,1.58
              c-0.56,0.62-1.08,1.29-1.56,1.99c-0.45,0.67-0.83,1.37-1.15,2.09s-0.56,1.4-0.72,2.04c-0.16,0.64-0.23,1.18-0.22,1.63
              c0.02,0.45,0.15,0.74,0.41,0.86c0.29,0.13,0.68,0.05,1.18-0.24c0.5-0.29,1.05-0.7,1.66-1.25c0.61-0.54,1.25-1.19,1.92-1.94
              c0.67-0.75,1.31-1.51,1.92-2.28c0.19-0.26,0.38-0.51,0.58-0.77c0.19-0.26,0.4-0.51,0.62-0.77c0.1-0.1,0.28-0.16,0.55-0.19
              c0.27-0.03,0.56-0.03,0.86,0c0.3,0.03,0.57,0.09,0.79,0.17c0.22,0.08,0.32,0.15,0.29,0.22c-0.35,0.61-0.71,1.28-1.08,2.02
              c-0.37,0.74-0.69,1.43-0.96,2.09c-0.27,0.66-0.47,1.23-0.6,1.73c-0.13,0.5-0.13,0.82,0,0.98c0.16,0.16,0.46,0.15,0.91-0.02
              c0.45-0.18,0.95-0.46,1.51-0.84c0.56-0.38,1.12-0.82,1.68-1.32C155.7,27.1,156.18,26.61,156.56,26.13z"/>
            <path fill="currentColor" d="M161.6,30.64c0.51,0.51,0.71,1.1,0.6,1.75c-0.11,0.66-0.4,1.24-0.86,1.75c-0.46,0.51-1.06,0.86-1.8,1.03
              c-0.74,0.18-1.47,0.04-2.21-0.41c-0.13-0.67-0.07-1.36,0.17-2.06c0.24-0.7,0.58-1.3,1.03-1.78c0.45-0.48,0.95-0.78,1.51-0.89
              C160.6,29.93,161.12,30.13,161.6,30.64z"/>
          </g>
        </svg>

        </h1>
        <span className={styles.subTitle}>Coming soon</span>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
