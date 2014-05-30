describe("A suite", function(){
			it("should pass", function(){
				expect(true).toBe(true);
			});

			it('should not pass', function(){
				expect(false).not.toBe(true);
			});

			it('work with objects', function(){
				var foo = {
					a: 12,
					b: 34
				};
				var bar = {
					a: 12,
					b: 34
				};
				expect(foo).toEqual(bar);
			});

			it('regex', function(){
				var message = 'foo bar baz';
				expect(message).toMatch(/bar/);
				expect(message).toMatch('bar');
			});

			it('to be defined', function(){
				var a = {
					foo : 'foo'
				};

				expect(a.foo).toBeDefined();
				expect(a.bar).not.toBeDefined();
			});

			it('to be null', function(){
				var a = null;
				var foo = 'foo';

				expect(null).toBeNull();
				expect(a).toBeNull();
				expect(foo).not.toBeNull();
			});

			it('to be falsy', function(){
				var a, foo = 'foo';

				expect(a).toBeFalsy();
				expect(foo).not.toBeFalsy();
			});

			it('to contain', function(){
				var a = ['foo', 'bar', 'baz'];
				expect(a).toContain('bar');
				expect(a).not.toContain('quu');
			});

			it('less than and greater than', function(){
				var pi = 3.14, e = 2.78;

				expect(e).toBeLessThan(pi);
				expect(e).not.toBeGreaterThan(pi);
			});

			it('throw exception', function(){
				var foo = function(){
					return 1+2;
				};
				var bar = function(){
					return a+1;
				};
				expect(foo).not.toThrow();
				expect(bar).toThrow();
			});
		});

		describe('Suite with setup and teardown and spies', function(){
			var foo;

			beforeEach(function(){
				foo = 0;
				foo += 1;

				spyOn(foo, 'setBar').andCallThrough())

				foo.setBar(123);
				foo.setBar(456, 'another param');
			});

			afterEach(function(){
				foo = 0;
			});

			it('tracks that the spy has been called', function(){
				expect(foo.setBar).toHaveBeenCalled();
			});


		});