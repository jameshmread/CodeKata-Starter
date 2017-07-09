using System;
using Xunit;

namespace test
{
    public class UnitTest1
    {
        [Fact]
        public void TestThatTestsRun()
        {
            var expected = false;
            var actual = true;
            Assert.Equal(expected, actual);
        }
    }
}
