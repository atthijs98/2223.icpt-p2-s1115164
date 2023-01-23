using System;
using System.Collections.Generic;

namespace RectangleApp
{
    internal class Menu
    {
        private readonly Rectangle rectangle;
        private readonly List<KeyValuePair<Action<int>, int>> actions;

        public Menu()
        {
            this.rectangle = new Rectangle();
            this.actions = new List<KeyValuePair<Action<int>, int>>();
        }

        internal void RunMenu()
        {
            Console.Clear();
            Console.WriteLine("This application creates a rectangle whose length and width can be determined.");
            Console.WriteLine("It can also be enlarged.\n");

            Console.WriteLine("Select an option by entering the corresponding number:\n");

            Console.WriteLine("1) Adjust length");
            Console.WriteLine("2) Adjust width");
            Console.WriteLine("3) Expand rectangle");
            Console.WriteLine("4) Done");

            SelectOption();
        }

        private void SelectOption()
        {
            Console.Write("\nSelect an option: ");
            
            switch (Console.ReadLine())
            {
                case "1":
                    this.actions.Add(
                        new KeyValuePair<Action<int>, int>(
                            rectangle.AddLength, 
                            GetNumberFromMenu("What value should the length be: ", false)
                            )
                        );
                    RunMenu();

                    return;
                case "2":
                    this.actions.Add(
                        new KeyValuePair<Action<int>, int>(
                            rectangle.AddWidth, 
                            GetNumberFromMenu("What value should the width be: ", false)
                            )
                        );
                    RunMenu();

                    return;
                case "3":
                    this.actions.Add(
                        new KeyValuePair<Action<int>, int>(
                            rectangle.ExpandRectangle, 
                            GetNumberFromMenu("How many times should the rectangle get bigger: ", false)
                            )
                        );
                    RunMenu();

                    return;
                case "4":
                    PrintResults();

                    return;
                default:
                    Console.WriteLine("Not a valid option, try again.");
                    SelectOption();

                    return;
            }
        }

        private int GetNumberFromMenu(string message, bool showError)
        {
            if (!showError) Console.Clear();
            
            Console.Write(message);

            if (!int.TryParse(Console.ReadLine(), out int value))
            {
                Console.WriteLine("Not a valid number, try again.\n");
                GetNumberFromMenu(message, true);
            }

            return value;
        }

        private void PrintResults()
        {
            Console.Clear();

            foreach (var pair in actions)
            {
                pair.Key(pair.Value);
                rectangle.PrintRectangle();
            }
        }
    }
}

