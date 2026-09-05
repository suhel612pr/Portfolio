import { useState, useEffect } from "react";
import { Database, Terminal, ShieldAlert, RefreshCw, Layers, Play, Server } from "lucide-react";

interface LogEntry {
  type: "input" | "output" | "error" | "info";
  text: string;
}

export default function MySQLInteractiveLab() {
  const [activeProject, setActiveProject] = useState<"library" | "ecommerce">("library");
  const [selectedQuery, setSelectedQuery] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<LogEntry[]>([]);
  const [dbState, setDbState] = useState({
    library: [
      { id: 1, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", status: "Available" },
      { id: 2, title: "Atomic Habits", author: "James Clear", genre: "Self-help", status: "Available" },
      { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance", status: "Lent" },
      { id: 4, title: "The Power of Now", author: "Eckhart Tolle", genre: "Spiritual", status: "Available" },
      { id: 5, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", genre: "Biography", status: "Available" },
      { id: 6, title: "Ikigai", author: "Hector Garcia", genre: "Self-help", status: "Lent" },
      { id: 7, title: "1984", author: "George Orwell", genre: "Dystopian", status: "Available" },
      { id: 8, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", status: "Available" },
      { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", status: "Available" },
      { id: 10, title: "Think and Grow Rich", author: "Napoleon Hill", genre: "Motivation", status: "Available" }
    ],
    customers: [
      { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com" },
      { id: 2, name: "Ayesha Khan", email: "ayesha@gmail.com" },
      { id: 3, name: "Vikram Patel", email: "vikram@gmail.com" }
    ],
    products: [
      { id: 101, name: "Laptop", price: 50000.00 },
      { id: 102, name: "Smartphone", price: 20000.00 },
      { id: 103, name: "Headphones", price: 2000.00 }
    ],
    orders: [
      { orderId: 1001, customerId: 1, productId: 101, date: "2026-02-10", qty: 1 },
      { orderId: 1002, customerId: 2, productId: 102, date: "2026-02-11", qty: 2 },
      { orderId: 1003, customerId: 1, productId: 103, date: "2026-02-12", qty: 3 },
      { orderId: 1004, customerId: 3, productId: 101, date: "2026-02-13", qty: 1 }
    ]
  });

  const libraryQueries = [
    {
      label: "Show Schema (DESCRIBE Books)",
      sql: "DESCRIBE Books;",
      desc: "Examine the MySQL columns, indexes, and primary key of the Books table."
    },
    {
      label: "Get All Books (SELECT)",
      sql: "SELECT * FROM Books;",
      desc: "Fetches all cataloged personal books and their current reading statuses."
    },
    {
      label: "Find Books by Author",
      sql: "SELECT * FROM Books WHERE Author = 'James Clear';",
      desc: "Performs atomic filtering on the indexed author column."
    },
    {
      label: "Lend out a Book (UPDATE)",
      sql: "UPDATE Books SET Status = 'Lent' WHERE BookID = 1;",
      desc: "Sets reading status ENUM to 'Lent' for index ID #1."
    },
    {
      label: "Remove Book (DELETE)",
      sql: "DELETE FROM Books WHERE BookID = 10;",
      desc: "Deletes the row where primary key equals 10."
    }
  ];

  const ecommerceQueries = [
    {
      label: "Show Customers",
      sql: "SELECT * FROM Customers;",
      desc: "Lists online clients with unique emails."
    },
    {
      label: "Show Available Products",
      sql: "SELECT * FROM Products;",
      desc: "Displays stock catalog prices."
    },
    {
      label: "View Placed Orders",
      sql: "SELECT * FROM Orders;",
      desc: "Tracks registered customer orders."
    },
    {
      label: "Complex Inner Join Query",
      sql: "SELECT c.Name AS CustomerName, p.ProductName, (p.Price * o.Quantity) AS TotalPrice\nFROM Orders o\nINNER JOIN Customers c ON o.CustomerID = c.CustomerID\nINNER JOIN Products p ON o.ProductID = p.ProductID;",
      desc: "Links orders to customers & products to compute total purchase pricing."
    },
    {
      label: "Group By & Having Aggregation",
      sql: "SELECT p.ProductName, SUM(p.Price * o.Quantity) AS TotalRevenue\nFROM Orders o\nINNER JOIN Products p ON o.ProductID = p.ProductID\nGROUP BY p.ProductName\nHAVING SUM(p.Price * o.Quantity) > 0;",
      desc: "Groups items by name to evaluate sales revenue distributions."
    },
    {
      label: "Simulate Foreign Key Violation Check",
      sql: "INSERT INTO Orders VALUES (1005, 99, 101, '2026-02-15', 1);",
      desc: "Violates referential integrity check since Customer ID 99 does not exist."
    }
  ];

  const queries = activeProject === "library" ? libraryQueries : ecommerceQueries;

  // Initial terminal greetings
  useEffect(() => {
    resetTerminal();
  }, [activeProject]);

  const resetTerminal = () => {
    const projName = activeProject === "library" ? "Digital Personal Library Manager" : "E-Commerce Order Management";
    setSelectedQuery("");
    setTerminalLogs([
      { type: "info", text: `--- Welcome to MySQL Server 8.0 Terminal Emulator ---` },
      { type: "info", text: `Active Database: sandbox_db` },
      { type: "info", text: `Initialized project schema: [${projName}]` },
      { type: "info", text: `Select a predefined query from the options below to run transaction diagnostics.` }
    ]);
  };

  const executeSQL = (sqlText: string) => {
    if (!sqlText) return;

    // Create custom command input log
    const newLogs = [...terminalLogs, { type: "input", text: `mysql> ${sqlText}` } as LogEntry];

    // Evaluate query simulated results
    const queryNormalized = sqlText.replace(/\s+/g, " ").trim().toLowerCase();

    setTimeout(() => {
      if (queryNormalized.includes("describe books;")) {
        newLogs.push({
          type: "output",
          text: `+--------+-----------------------+------+-----+-----------+-------+
| Field  | Type                  | Null | Key | Default   | Extra |
+--------+-----------------------+------+-----+-----------+-------+
| BookID | int                   | NO   | PRI | NULL      |       |
| Title  | varchar(100)          | NO   |     | NULL      |       |
| Author | varchar(100)          | NO   |     | NULL      |       |
| Genre  | varchar(50)           | YES  |     | NULL      |       |
| Status | enum('Available','Lent') | YES  |     | Available |       |
+--------+-----------------------+------+-----+-----------+-------+
5 rows in set (0.02 sec)`
        });
      } else if (queryNormalized.includes("select * from books;")) {
        let rows = dbState.library.map(b => 
          `| ${String(b.id).padEnd(6)} | ${b.title.padEnd(21)} | ${b.author.padEnd(17)} | ${b.genre.padEnd(10)} | ${b.status.padEnd(9)} |`
        ).join("\n");
        newLogs.push({
          type: "output",
          text: `+--------+-----------------------+-------------------+------------+-----------+
| BookID | Title                 | Author            | Genre      | Status    |
+--------+-----------------------+-------------------+------------+-----------+
${rows}
+--------+-----------------------+-------------------+------------+-----------+
${dbState.library.length} rows in set (0.01 sec)`
        });
      } else if (queryNormalized.includes("select * from books where author = 'james clear';")) {
        const filtered = dbState.library.filter(b => b.author === "James Clear");
        let rows = filtered.map(b => 
          `| ${String(b.id).padEnd(6)} | ${b.title.padEnd(21)} | ${b.author.padEnd(17)} | ${b.genre.padEnd(10)} | ${b.status.padEnd(9)} |`
        ).join("\n");
        newLogs.push({
          type: "output",
          text: `+--------+-----------------------+-------------------+------------+-----------+
| BookID | Title                 | Author            | Genre      | Status    |
+--------+-----------------------+-------------------+------------+-----------+
${rows}
+--------+-----------------------+-------------------+------------+-----------+
${filtered.length} rows in set (0.00 sec)`
        });
      } else if (queryNormalized.includes("update books set status = 'lent' where bookid = 1;")) {
        setDbState(prev => ({
          ...prev,
          library: prev.library.map(b => b.id === 1 ? { ...b, status: "Lent" } : b)
        }));
        newLogs.push({
          type: "output",
          text: `Query OK, 1 row affected (0.05 sec)\nRows matched: 1  Changed: 1  Warnings: 0`
        });
      } else if (queryNormalized.includes("delete from books where bookid = 10;")) {
        setDbState(prev => ({
          ...prev,
          library: prev.library.filter(b => b.id !== 10)
        }));
        newLogs.push({
          type: "output",
          text: `Query OK, 1 row affected (0.04 sec)`
        });
      } else if (queryNormalized.includes("select * from customers;")) {
        let rows = dbState.customers.map(c => 
          `| ${String(c.id).padEnd(10)} | ${c.name.padEnd(13)} | ${c.email.padEnd(17)} |`
        ).join("\n");
        newLogs.push({
          type: "output",
          text: `+------------+---------------+-------------------+
| CustomerID | Name          | Email             |
+------------+---------------+-------------------+
${rows}
+------------+---------------+-------------------+
${dbState.customers.length} rows in set (0.01 sec)`
        });
      } else if (queryNormalized.includes("select * from products;")) {
        let rows = dbState.products.map(p => 
          `| ${String(p.id).padEnd(9)} | ${p.name.padEnd(11)} | ${String(p.price.toFixed(2)).padEnd(9)} |`
        ).join("\n");
        newLogs.push({
          type: "output",
          text: `+-----------+-------------+-----------+
| ProductID | ProductName | Price     |
+-----------+-------------+-----------+
${rows}
+-----------+-------------+-----------+
${dbState.products.length} rows in set (0.01 sec)`
        });
      } else if (queryNormalized.includes("select * from orders;")) {
        let rows = dbState.orders.map(o => 
          `| ${String(o.orderId).padEnd(7)} | ${String(o.customerId).padEnd(10)} | ${String(o.productId).padEnd(9)} | ${o.date.padEnd(10)} | ${String(o.qty).padEnd(8)} |`
        ).join("\n");
        newLogs.push({
          type: "output",
          text: `+---------+------------+-----------+------------+----------+
| OrderID | CustomerID | ProductID | OrderDate  | Quantity |
+---------+------------+-----------+------------+----------+
${rows}
+---------+------------+-----------+------------+----------+
${dbState.orders.length} rows in set (0.02 sec)`
        });
      } else if (queryNormalized.includes("inner join customers") || queryNormalized.includes("totalprice")) {
        // Inner join customers, products, orders simulation
        const joined = dbState.orders.map(o => {
          const cust = dbState.customers.find(c => c.id === o.customerId);
          const prod = dbState.products.find(p => p.id === o.productId);
          const total = (prod?.price || 0) * o.qty;
          return `| ${cust?.name.padEnd(13) || ""} | ${prod?.name.padEnd(11) || ""} | ${String(total.toFixed(2)).padEnd(10)} |`;
        }).join("\n");
        newLogs.push({
          type: "output",
          text: `+--------------+-------------+------------+
| CustomerName | ProductName | TotalPrice |
+--------------+-------------+------------+
${joined}
+--------------+-------------+------------+
4 rows in set (0.03 sec)`
        });
      } else if (queryNormalized.includes("group by") || queryNormalized.includes("totalrevenue")) {
        // Revenue query group by
        const revenues = dbState.products.map(p => {
          const matchingOrders = dbState.orders.filter(o => o.productId === p.id);
          const totalRev = matchingOrders.reduce((sum, o) => sum + (o.qty * p.price), 0);
          return { name: p.name, revenue: totalRev };
        });
        const rows = revenues.map(r => 
          `| ${r.name.padEnd(11)} | ${String(r.revenue.toFixed(2)).padEnd(12)} |`
        ).join("\n");
        newLogs.push({
          type: "output",
          text: `+-------------+--------------+
| ProductName | TotalRevenue |
+-------------+--------------+
${rows}
+-------------+--------------+
3 rows in set (0.04 sec)`
        });
      } else if (queryNormalized.includes("insert into orders values (1005, 99") || queryNormalized.includes("99")) {
        // Foreign Key Violation representation
        newLogs.push({
          type: "error",
          text: `ERROR 1452 (23000) at line 38: Cannot add or update a child row: a foreign key constraint fails (\`sandbox_db\`.\`orders\`, CONSTRAINT \`orders_ibfk_1\` FOREIGN KEY (\`CustomerID\`) REFERENCES \`customers\` (\`CustomerID\`))`
        });
      } else {
        newLogs.push({
          type: "error",
          text: "ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use."
        });
      }

      setTerminalLogs(newLogs);
      
      // Auto-scroll the terminal emulator box
      setTimeout(() => {
        const terminal = document.getElementById("mysql-console-logs");
        if (terminal) {
          terminal.scrollTop = terminal.scrollHeight;
        }
      }, 50);

    }, 350);
  };

  const handleQuerySelect = (sql: string) => {
    setSelectedQuery(sql);
    executeSQL(sql);
  };

  return (
    <div className="w-full bg-[#131315] border border-[#262629] rounded-xl p-6 sm:p-8" id="mysql-interactive-lab">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#262629] mb-8">
        <div className="space-y-1.5 text-left">
          <h3 className="text-xl font-semibold text-[#ece9e4] flex items-center gap-2">
            <Database className="w-5 h-5 text-[#c17a3d]" />
            <span>SQL Query Simulator</span>
          </h3>
          <p className="text-sm text-[#9c9a96] max-w-xl">
            Pick a query below to run it against a small mock dataset that mirrors the schema
            each project actually uses.
          </p>
        </div>

        {/* Database Toggle Switches */}
        <div className="flex items-center bg-[#0b0b0c] p-1 rounded-lg border border-[#262629] self-start md:self-center">
          <button
            onClick={() => setActiveProject("library")}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeProject === "library"
                ? "bg-[#c17a3d] text-[#0b0b0c]"
                : "text-[#9c9a96] hover:text-[#ece9e4]"
            }`}
            id="lab-btn-library"
          >
            Library Manager
          </button>
          <button
            onClick={() => setActiveProject("ecommerce")}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeProject === "ecommerce"
                ? "bg-[#c17a3d] text-[#0b0b0c]"
                : "text-[#9c9a96] hover:text-[#ece9e4]"
            }`}
            id="lab-btn-ecommerce"
          >
            Order Management
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left column: Query selections */}
        <div className="lg:col-span-5 space-y-3 text-left">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#6b6966] flex items-center gap-2 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Queries</span>
          </h4>

          <div className="space-y-2.5" id="query-options-list">
            {queries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuerySelect(q.sql)}
                className={`w-full text-left p-3.5 rounded-lg border transition-colors cursor-pointer group ${
                  selectedQuery === q.sql
                    ? "bg-[#1a1a1d] border-[#c17a3d]/50"
                    : "bg-transparent border-[#262629] hover:border-[#38383c]"
                }`}
                id={`query-option-${idx}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span
                      className={`text-xs font-mono font-semibold block ${
                        selectedQuery === q.sql ? "text-[#c17a3d]" : "text-[#ece9e4]"
                      }`}
                    >
                      {q.label}
                    </span>
                    <p className="text-xs text-[#9c9a96] leading-relaxed">{q.desc}</p>
                  </div>
                  <div className="p-1.5 rounded-md bg-[#0b0b0c] border border-[#262629] text-[#6b6966] group-hover:text-[#ece9e4] transition-colors mt-0.5">
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#1a1a1d] font-mono text-[10px] sm:text-xs text-[#6b6966] overflow-x-auto whitespace-nowrap">
                  {q.sql.split("\n")[0]} {q.sql.split("\n").length > 1 ? "..." : ""}
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3 justify-between">
            <button
              onClick={resetTerminal}
              className="px-3.5 py-2 rounded-md border border-[#262629] hover:border-[#38383c] text-xs text-[#9c9a96] hover:text-[#ece9e4] transition-colors cursor-pointer flex items-center gap-2"
              id="lab-reset-btn"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <span className="text-[10px] font-mono text-[#6b6966] flex items-center gap-1">
              <Server className="w-3.5 h-3.5" />
              mock data, runs in your browser
            </span>
          </div>
        </div>

        {/* Right column: Terminal output */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="rounded-lg border border-[#262629] bg-[#0b0b0c] flex flex-col h-[440px]">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131315] border-b border-[#262629] rounded-t-lg">
              <span className="font-mono text-xs text-[#6b6966] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>console</span>
              </span>
            </div>

            <div
              id="mysql-console-logs"
              className="flex-grow p-4 font-mono text-xs text-[#c8c6c2] overflow-y-auto space-y-3 text-left leading-relaxed"
            >
              {terminalLogs.map((log, index) => {
                if (log.type === "input") {
                  return (
                    <div key={index} className="text-[#c17a3d] flex items-start gap-1.5">
                      <span className="text-[#6b6966] shrink-0">&gt;</span>
                      <span className="whitespace-pre-wrap">{log.text}</span>
                    </div>
                  );
                } else if (log.type === "error") {
                  return (
                    <div
                      key={index}
                      className="p-3 bg-[#2a1616] border border-[#4a2323] text-[#e08787] rounded-lg flex items-start gap-3"
                    >
                      <ShieldAlert className="w-4 h-4 shrink-0 text-[#e08787] mt-0.5" />
                      <div className="whitespace-pre-wrap text-[11px] leading-relaxed">{log.text}</div>
                    </div>
                  );
                } else if (log.type === "info") {
                  return (
                    <div key={index} className="text-[#6b6966] text-[11px] border-b border-[#1a1a1d] pb-2 mb-2">
                      {log.text}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="text-[#9cc98a] bg-[#131315] font-mono text-[11px] p-3 rounded-lg border border-[#1a1a1d] overflow-x-auto whitespace-pre"
                    >
                      {log.text}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
