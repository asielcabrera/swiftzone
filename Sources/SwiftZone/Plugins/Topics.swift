//
//  File.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Foundation
import Publish

extension PublishingStep where Site == SwiftZone {
    static func checkTopics() -> Self {
        .step(named: "CheckTopics") { context in
            Topic.checkTopics(context: context)
        }
    }
}

struct Topic {
    static func checkTopics(context: PublishingContext<SwiftZone>) {
        context.allItems(sortedBy: \.date).forEach { item in
//            print(item.metadata.topic)
            
        }
    }
}


struct TopicMetadata {
    let name: String
    var tags: [Tag]
    
    init(name: String, tags: [Tag]) {
        self.name = name
        self.tags = tags
    }
}


//public extension Item {
//    var topic: TopicMetadata {
//
//    }
//}
