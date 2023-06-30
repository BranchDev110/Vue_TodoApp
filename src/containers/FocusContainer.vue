<template>
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max h-16">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:15;"></span>
      </span>
      days
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:10;"></span>
      </span>
      hours
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:24;"></span>
      </span>
      min
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:28;"></span>
      </span>
      sec
    </div>
  </div>
</template>