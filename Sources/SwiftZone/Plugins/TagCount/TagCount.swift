//
//  TagCount.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish

extension Plugin{
    static func countTag() -> Self{
        return Plugin(name: "countTag"){ content in
            CountTag.count(content: content)
        }
    }
}

struct CountTag{
    static var count:[Tag:Int] = [:]
    static func count<T:Website>(content:PublishingContext<T>){
        for tag in content.allTags{
            count[tag] =  content.items(taggedWith: tag).count
        }
    }
}

extension Tag{
    public var count:Int{
        CountTag.count[self] ?? 0
    }
}

