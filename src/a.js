// import React, { useRef, useEffect } from 'react';
// import styles from './index.module.less';

// export function ProgressBar() {
//   const barRef = useRef(null); // 用于获取进度条元素的引用
//   const requestRef = useRef<number>(); // 用于保存requestAnimationFrame的ID
//   const startTimeRef = useRef<number>(); // 用于存储动画开始的时间戳

//   // 动画函数
//   const animate = (timestamp: number) => {
//     if (!startTimeRef.current) {
//       startTimeRef.current = timestamp; // 初始化动画开始时间戳
//     }

//     const elapsed = timestamp - startTimeRef.current; // 计算已过时间
//     const progress = Math.min(elapsed / 15000, 1); // 计算进度，确保不超过1

//     if (barRef.current) {
//       barRef.current.style.transform = `scaleX(${progress})`;
//     }

//     if (progress < 1) {
//       requestRef.current = requestAnimationFrame(animate); // 继续动画
//     }
//   };

//   // 启动动画
//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (requestRef.current) {
//         cancelAnimationFrame(requestRef.current);
//       }
//     };
//   }, []);
//   // 空依赖数组表示这个effect仅在组件mount时运行

//   return (
//     <div className={styles.box}>
//       <div
//         className={styles.progress}
//         ref={barRef}
//         style={{
//           // zIndex: 10000,
//           // height: '30px',
//           // width: '0%',
//           transition: 'grow 15s cubic-bezier(0.3, 0.7, 0.3, 0.7) forwards',
//         }}
//       ></div>
//     </div>
//   );
// }
