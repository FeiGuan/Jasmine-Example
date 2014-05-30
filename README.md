#Jasmine 1.3 Example
---
###-1. Describe Your Tests<br />
Call Jasmine function <code>describe</code> with two parameters: title string and implementation function.
```javascript
describe("A suite", function(){
	
});
```
###-2. Specs<br />
Call function <code>it</code> with two parameters: title string and a spec function, the function contains one or more expectations that test the state of the code under test. A toBe matcher compares with <code>===</code>
```javascript
desctibe("A suite", function(){
	var a;
	it("A spec", function(){
		a = true;
		expect(a).toBe(true);
	});
});
```
###-3. Other matchers<br />
<code>expect(x).toEqual(y)</code>  passes if they are equaivalent<br />
<code>expect(x).toMatch(pattern)</code> passes if x matches pattern<br />
<code>toBeDefined</code>, <code>toBeUndefined</code>, <code>toBeNull</code>, <code>toContain</code>, <code>toBeLessThan</code>, <code>toBeGreaterThan</code>, <code>expect(function(){}).toThrow(e);</code><br />
<code>expect(x).not.toEqual(y)</code>

###-4. Setup and Teardown<br />
```javascript
describe("A suite with setup and teardown", function(){
	var foo;
	beforeEach(function(){
		foo = 0;
		foo += 1;
	});

	afterEach(function(){
		foo = 0;
	});

	it('A spec', function(){
		expect(foo).toEqual(1);
	});

	it('Another spec', function(){
		expect(foo).toEqual(1);
		expect(true).toEqual(true);
	});
});
```

###-5. Spies<br />
A spy can stub any function and tracks calls to it and all arguments.
```javascript
beforeEach(function(){
	foo = {
		setBar: function(value){
			bar = value;
		}
	};

	spyOn(foo, 'setBar');
});

it('spy', function(){
	expect(foo.setBar).toHaveBeenCalled();
});


it('spy arg', function(){
	expect(foo.setBar).toHaveBeenCalledWith(123);
});
```
Other spies function:<br />
<code>andReturn</code>, <code>andCallFake</code>, <code>createSpy</code>


###-6. Jasmine spec runner<br />
```javascript
(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var trivialReporter = new jasmine.TrivialReporter();

    jasmineEnv.addReporter(trivialReporter);

    jasmineEnv.specFilter = function (spec) {
        return trivialReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
        trivialReporter.outerDiv.className += ' show-passed';
    }

})();
```
