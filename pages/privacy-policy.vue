<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-28 bg-secondary" data-aos="fade-down">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <nuxt-link to="/" class="inline-flex items-center text-primary font-medium mb-6 hover:underline" data-aos="fade-right" data-aos-delay="100">
            <Icon name="lucide:arrow-left" class="h-4 w-4 mr-2" /> Back to home
          </nuxt-link>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200">
            Privacy Policy
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            Last updated: June 1, 2023
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
          <div class="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At SwiftZone, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>The data we collect about you</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2>How we collect your personal data</h2>
            <p>We use different methods to collect data from and about you including through:</p>
            <ul>
              <li><strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise.</li>
              <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns.</li>
              <li><strong>Third parties or publicly available sources.</strong> We may receive personal data about you from various third parties and public sources.</li>
            </ul>

            <h2>How we use your personal data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2>Data security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>Data retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>

            <h2>Your legal rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h2>Changes to the privacy policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li>By email: privacy@swiftzone.dev</li>
              <li>By visiting our contact page: <nuxt-link to="/contact" class="text-primary hover:underline">Contact Us</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page metadata
useHead({
  title: 'Privacy Policy - SwiftZone',
  meta: [
    { name: 'description', content: 'SwiftZone privacy policy. Learn how we collect, use, and protect your personal information.' }
  ]
})
</script>