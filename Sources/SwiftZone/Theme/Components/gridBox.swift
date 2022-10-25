//
//  File.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Plot
import Publish

struct Recomendation {
    let type: RecomendationType
    let tittle: String
    let label: String
}

extension Recomendation {
    static let share: [Recomendation] = [
        Recomendation(type: .podcast, tittle: "Another episode about Swift’s language features", label: "103: “What’s new in Swift 5.5” ,  with special guest Antoine van der Lee"),
        Recomendation(type: .article, tittle: "Read more about Swift’s language features", label: "Conditional compilation within Swift expressions"),
        Recomendation(type: .article, tittle: "Another article about wwdc22", label: "Switching between SwiftUI’s HStack and VStack")
    ]
}

enum RecomendationType: String {
    case podcast
    case article
}

extension Node where Context == HTML.BodyContext {
    static func gridBox<Site: Website>(context: PublishingContext<Site>) -> Node {
        let recomendations: [Recomendation] = Recomendation.share
        
        return .ul(
            .class("item-list feature grid compact"),
            .forEach(recomendations, { recomendation in
                    .li(
                        .a(
                            .href("/"),
                            .ariaLabel(recomendation.label),
                            .article(
                                .class(recomendation.type.rawValue),
                                .span(.text(recomendation.tittle), .class("type")),
                                .if(recomendation.type == .podcast,
                                    .h1(
                                        .text(recomendation.label.split(separator: ",").first?.description ?? ""),
                                        .span(
                                            .class("guest"),
                                            .text(recomendation.label.split(separator: ",").last?.description ?? "")
                                        )
                                        
                                    ),
                                    else:
                                        .h1(
                                            .text(recomendation.label)
                                            
                                        )
                                )
                            )
                        )
                    )
            })
        )
    }
}
