import Foundation
import Publish
import Plot

// This type acts as the configuration for your website.
struct SwiftZone: Website {
   
    // Update these properties to configure your website:
    var url = URL(string: "https://swiftzone.dev")!
    var name = "SwiftZone"
    var description = "A description of SwiftZone"
    var language: Language { .spanish }
    var imagePath: Path? { Path("images/blogBackground.svg") }
    
    var socialNetwork: [String] = ["twitter"]
}

// This will generate your website using the built-in Foundation theme:
try SwiftZone().publish(
    using: [
        .installPlugin(.splash(withClassPrefix: "hljs-")),
        .copyResources(),
        .addMarkdownFiles(),
        .setSectionTitle(),
        .installPlugin(.readingTime()),
        .installPlugin(.setDateFormatter()),
        .installPlugin(.countTag()),
        .installPlugin(.colorfulTags(defaultClass: "tag", variantPrefix: "variant", numberOfVariants: 8)),
        .sortItems(by: \.date, order: .descending),
        .checkTopics(),
        .generateHTML(withTheme: .main),
        .installPlugin(.rssSetting(including:[.posts, .project])),
        .generateRSSFeed(
            including: [.posts,.project],
            itemPredicate: nil
        ),
        .generateSiteMap(),
        
        .unwrap(.gitHub("asielcabrera/SwiftZone", useSSH: false), PublishingStep.deploy)
            
    ]
)
