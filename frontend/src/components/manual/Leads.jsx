
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Trash2, SquarePen, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

  const LeadsData = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@yahoo.com",
    duration: "3 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "2",
    name: "Amit Verma",
    email: "amit45@gmail.com",
    duration: "6 months",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "3",
    name: "Priya Desai",
    email: "priya44@gmail.com",
    duration: "4 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "4",
    name: "Sanjay Patel",
    email: "sanjay22@gmail.com",
    duration: "5 months",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "5",
    name: "Kavita Reddy",
    email: "kavita@hotmail.com",
    duration: "2 months",
    status: "Lost Lead",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "6",
    name: "Vikas Kumar",
    email: "vikas@example.com",
    duration: "7 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "7",
    name: "Neha Gupta",
    email: "neha@example.com",
    duration: "1 month",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "8",
    name: "Rajesh Singh",
    email: "rajesh@example.com",
    duration: "8 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "9",
    name: "Aarti Joshi",
    email: "aarti@example.com",
    duration: "2 months",
    status: "Lost Lead",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "10",
    name: "Anil Mehta",
    email: "anil@example.com",
    duration: "4 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "11",
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    duration: "5 months",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "12",
    name: "Shivani Mehta",
    email: "shivani@example.com",
    duration: "3 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "13",
    name: "Varun Joshi",
    email: "varun@example.com",
    duration: "6 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "14",
    name: "Isha Agarwal",
    email: "isha.agarwal@example.com",
    duration: "2 months",
    status: "Lost Lead",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "15",
    name: "Sushil Gupta",
    email: "sushil.gupta@example.com",
    duration: "1 month",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "16",
    name: "Geeta Kumari",
    email: "geeta.kumari@example.com",
    duration: "4 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "17",
    name: "Harshit Yadav",
    email: "harshit.yadav@example.com",
    duration: "5 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "18",
    name: "Karan Patel",
    email: "karan.patel@example.com",
    duration: "3 months",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "19",
    name: "Alok Soni",
    email: "alok.soni@example.com",
    duration: "7 months",
    status: "Lost Lead",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "20",
    name: "Nina Sharma",
    email: "nina.sharma@example.com",
    duration: "8 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "21",
    name: "Kunal Thakur",
    email: "kunal.thakur@example.com",
    duration: "5 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "22",
    name: "Monika Joshi",
    email: "monika.joshi@example.com",
    duration: "9 months",
    status: "Closed",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "23",
    name: "Vishal Reddy",
    email: "vishal.reddy@example.com",
    duration: "2 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "24",
    name: "Priyanka Verma",
    email: "priyanka.verma@example.com",
    duration: "6 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
  {
    id: "25",
    name: "Shashank Joshi",
    email: "shashank.joshi@example.com",
    duration: "4 months",
    status: "Active",
    delete: <Trash2 color="#EB4E31" size={20} />,
    edit: <SquarePen color="#3b82f6" size={20} />,
  },
];


 const Leads = () => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6); // Set default to 6

  // Filter the Leads based on Email
  const filteredLeads = LeadsData.filter((lead) =>
    lead.email.toLowerCase().includes(filter.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredLeads.length / rowsPerPage);
  const paginatedLeads = filteredLeads.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  // Handle Page Change
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto bg-white mt-2">
      <div className="flex flex-col pb-7 px-7">
        <div className="py-7 flex items-center justify-between">
          <h1 className="text-2xl text-[#3c50e0] font-semibold">Leads Report</h1>

          {/* Filter Input */}
          <Input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter Leads Using Emails"
            className="max-w-md"
          />
        </div>

        <div className="px-4 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="text-lg text-[#64748b]">
                <TableHead className="text-center">ID</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Email</TableHead>
                <TableHead className="text-center">Duration</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Delete</TableHead>
                <TableHead className="text-center">Edit</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedLeads.length > 0 ? (
                paginatedLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="text-center text-base">{lead.id}</TableCell>
                    <TableCell className="text-center text-base">{lead.name}</TableCell>
                    <TableCell className="text-center text-base">{lead.email}</TableCell>
                    <TableCell className="text-center text-base">{lead.duration}</TableCell>
                    <TableCell className="text-center">
                      <p
                        className={`rounded py-0.5 text-base text-bold ${
                          lead.status === "Active"
                            ? "text-[#10b981] bg-[#f5f7fd]"
                            : "text-[#fb5454] bg-[#f5f7fd]"
                        }`}
                      >
                        {lead.status}
                      </p>
                    </TableCell>

                    <TableCell className="text-center text-base">
                      <button>{lead.delete}</button>
                    </TableCell>
                    <TableCell className="text-center text-base">
                      <button>{lead.edit}</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="h-24 text-center text-[#5e6d82] text-base font-semibold"
                  >
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="relative inline-block w-[8vw] border">
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="px-4 py-2 text-semibold text-base appearance-none w-full focus:outline-none focus:border-none"
            >
              <option value={6}>6 rows</option>
              <option value={10}>10 rows</option>
              <option value={15}>15 rows</option>
            </select>
            {/* Custom Arrow */}
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronDown size={15} />
            </span>
          </div>

          <div className="text-base font-semibold text-[#71717a]">
            Showing {paginatedLeads.length} of {filteredLeads.length} leads.
          </div>

          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="text-black/90 border-black/40 rounded-md"
              onClick={handlePreviousPage}
              disabled={currentPage <= 0}
            >
              Prev Leads
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="text-black/90 border-black/40"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
            >
              Next Leads
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads
