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
            Terms and Conditions
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            Last updated: June 1, 2023
          </p>
        </div>
      </div>
    </section>

    <!-- Terms and Conditions Content -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
          <div class="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              These terms and conditions outline the rules and regulations for the use of SwiftZone's website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use SwiftZone's website if you do not accept all of the terms and conditions stated on this page.
            </p>

            <h2>License</h2>
            <p>
              Unless otherwise stated, SwiftZone and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from this website</li>
              <li>Reproduce, duplicate or copy material from this website</li>
              <li>Redistribute content from SwiftZone (unless content is specifically made for redistribution)</li>
            </ul>

            <h2>User Comments</h2>
            <p>
              Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data. SwiftZone does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of SwiftZone, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
            </p>
            <p>You warrant and represent that:</p>
            <ul>
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</li>
              <li>The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity</li>
            </ul>

            <h2>Hyperlinking to our Content</h2>
            <p>
              The following organizations may link to our website without prior written approval:
            </p>
            <ul>
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses</li>
            </ul>
            <p>
              These organizations may link to our home page, to publications or to other website information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
            </p>

            <h2>Reservation of Rights</h2>
            <p>
              We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our website upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our website, you agree to be bound to and abide by these linking terms and conditions.
            </p>

            <h2>Removal of links from our website</h2>
            <p>
              If you find any link on our website or any linked website objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
            </p>

            <h2>Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
            </p>
            <p>Nothing in this disclaimer will:</p>
            <ul>
              <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>

            <h2>Changes to Terms</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul>
              <li>By email: legal@swiftzone.dev</li>
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
  title: 'Terms and Conditions - SwiftZone',
  meta: [
    { name: 'description', content: 'SwiftZone terms and conditions. Learn about the rules and regulations for using our website and services.' }
  ]
})
</script>