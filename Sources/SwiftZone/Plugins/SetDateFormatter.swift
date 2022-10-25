//
//  SetDateFormatter.swift.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Foundation
import Publish

extension Plugin{
    static func setDateFormatter() -> Self {
        Plugin(name: "setDateFormatter"){ context in
            let formatter = DateFormatter()
            formatter.dateStyle = .short
            context.dateFormatter = formatter
        }
    }
}
