<template>
    <div
      class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card"
    >
      <div class="card" :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    dataImage: {
      type: String,
      required: true
    }
  });
  
  const width = ref(0);
  const height = ref(0);
  const mouseX = ref(0);
  const mouseY = ref(0);
  const card = ref(null);
  let mouseLeaveDelay = null;
  
  onMounted(() => {
    width.value = card.value.offsetWidth;
    height.value = card.value.offsetHeight;
  });
  
  const mousePX = computed(() => mouseX.value / width.value);
  const mousePY = computed(() => mouseY.value / height.value);
  
  const cardStyle = computed(() => {
    const rX = mousePX.value * 30;
    const rY = mousePY.value * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  });
  
  const cardBgTransform = computed(() => {
    const tX = mousePX.value * -40;
    const tY = mousePY.value * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  });
  
  const cardBgImage = computed(() => {
    return {
      backgroundImage: `url(${props.dataImage})`
    };
  });
  
  const handleMouseMove = (e) => {
    mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2;
    mouseY.value = e.pageY - card.value.offsetTop - height.value / 2;
  };
  
  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };
  
  const handleMouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => {
      mouseX.value = 0;
      mouseY.value = 0;
    }, 1000);
  };
  </script>
  
  <style scoped>
  .card-wrap {
    margin: 10px;
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;
  }
  
  .card {
    position: relative;
    width: 240px;
    height: 320px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow:
      rgba(0, 0, 0, 0.66) 0 30px 60px 0,
      inset #333 0 0 0 5px,
      inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
    transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  
  .card-bg {
    opacity: 0.5;
    position: absolute;
    /* top: -20px;
    left: -20px; */
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    pointer-events: none;
  }
  
  .card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    transform: translateY(40%);
    transition: transform 0.6s ease;
  }
  
  .card-info p {
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  
  .card-wrap:hover .card-info {
    transform: translateY(0);
  }
  
  .card-wrap:hover .card-info p {
    opacity: 1;
  }
  
  .card-wrap:hover .card {
    box-shadow:
      rgba(255, 255, 255, 0.2) 0 0 40px 5px,
      rgba(255, 255, 255, 1) 0 0 0 1px,
      rgba(0, 0, 0, 0.66) 0 30px 60px 0,
      inset #333 0 0 0 5px,
      inset #fff 0 0 0 6px;
  }
  
  .card-wrap:hover .card-bg {
    opacity: 0.8;
  }
  </style>
  