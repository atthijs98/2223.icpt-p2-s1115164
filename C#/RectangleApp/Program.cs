using System;

namespace RectangleApp
{
    internal class Rectangle
    {
        private int length;
        private int width;

        internal void AddLength(int _length)
        {
            length += _length;
        }

        internal void AddWidth(int _width)
        {
            width += _width;
        }

        internal void ExpandRectangle(int multiplyBy)
        {
            if (multiplyBy != 0)
            {
                width *= multiplyBy;
                length *= multiplyBy;
            }
        }

        internal void PrintRectangle()
        {
            Console.WriteLine("Rectangle:\n");
            Console.WriteLine($"Length: {length}");
            Console.WriteLine($"Width: {width}\n");
        }
    }
}

