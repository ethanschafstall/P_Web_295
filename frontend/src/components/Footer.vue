<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-item">
        <p>Lucas Simões - MID2</p>
        <a href="mailto:lucas.simoes@eduvaud.ch">lucas.simoes@eduvaud.ch</a>
      </div>
      <div class="footer-item">
        <p>Ethan Schafstall - CID2B</p>
        <a href="mailto:ethan.schafstall@eduvaud.ch">ethan.schafstall@eduvaud.ch</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #aca37e9d;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
  height: 40px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-item p {
  margin: 0;
}

.footer-item a {
  color: #1a73e8;
  text-decoration: none;
}

.footer-item a:hover {
  text-decoration: underline;
}
a:link{
    color: #447866;
}
@media (min-width: 600px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-item {
    flex: 1;
    margin: 0 10px;
  }
}
</style>
