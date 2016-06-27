 /**
 * clock.js
 * @version: v1.0.0
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 *
 * Created by Dennis Hernández on 27/Jun/2016.
 *
 * Copyright (c) 2014 Dennis Hernández http://djhvscf.github.io/Blog
 *	
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

;(function(window) {
	
	'use strict';

    var monthNames = [ "January", 
                        "February", 
                        "March", 
                        "April", 
                        "May", 
                        "June", 
                        "July", 
                        "August", 
                        "September", 
                        "October",
                        "November",
                        "December" ]; 

    var dayNames= ["Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"];
    
    function sprintf(str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace( /%s/g, function () {
            var arg = args[ i++ ];

            if ( typeof arg === 'undefined' ) {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    }
	
	function extend(a, b) {
		for(var key in b) { 
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function clock(options) {
		this.options = extend(this.options, options);
        var newDate = new Date(),
            that = this;
        newDate.setDate(newDate.getDate());
        
        document.getElementById(that.options.date).innerHTML = sprintf("%s %s %s %s",dayNames[newDate.getDay()], newDate.getDate(), monthNames[newDate.getMonth()], newDate.getFullYear());

        setInterval( function() {
            var seconds = new Date().getSeconds();
            document.getElementById(that.options.sec).innerHTML = sprintf("%s" , (seconds < 10 ? "0" : "") + seconds);
        }, 1000);
        
        setInterval( function() {
            var minutes = new Date().getMinutes();
            document.getElementById(that.options.min).innerHTML = sprintf("%s" , (minutes < 10 ? "0" : "") + minutes);
        }, 1000);
        
        setInterval( function() {
            var hours = new Date().getHours();
            document.getElementById(that.options.hours).innerHTML = sprintf("%s", (hours < 10 ? "0" : "") + hours);
        }, 1000);
	}

	clock.prototype.options = {
		date: "date",
        sec: "sec",
        min: "min",
        hours: "hours"
	}

	window.clock = clock;
})(window);