//
//  Theme.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish

public extension Theme {
    /// The default "Main" theme for FullStackSwift Blog.
    static var main: Self {
        Theme(
            htmlFactory: SwiftZoneTheme(),
            resourcePaths: ["Resources/MainTheme/styles.css"]
        )
    }
}
