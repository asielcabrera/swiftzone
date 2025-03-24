<template>
  <div class="font-sans">
    <LanguageProvider>
      <NavBar />
      <main class="min-h-screen pt-20">
        <slot />
      </main>

      <Footer />
    </LanguageProvider>
  </div>
</template>

