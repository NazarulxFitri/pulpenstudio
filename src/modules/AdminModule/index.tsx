import { BoxContainer } from "@/components";
import { EInviteConfig } from "@/data/useGetEinvite";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

interface AdminModuleProps {
  data: EInviteConfig;
}

const AdminModule: React.FC<AdminModuleProps> = ({ data }) => {
  const [totalPax, setTotalPax] = useState(0);
  const rsvpData = data?.rsvp;

  console.log("xxxx rsvpdata", rsvpData);

  useEffect(() => {
    let total = 0;
    rsvpData?.forEach((i) => {
      total += i.pax;
    });
    setTotalPax(total);
  }, []);

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>Admin Dashboard</h1>
      <Box mt={2}>
        <Box id="card-detail">
          <Box>
            <p style={{ marginTop: "8px" }}>Card Name : {data?.name}</p>
            <p style={{ marginTop: "8px" }}>Created At : {data?.createdAt}</p>
            <p style={{ marginTop: "8px" }}>
              Url :{" "}
              <a href={`/e-invite/live/${data?.name}`}>
                www.pulpenstudio.com/e-invite/live/{data?.name}
              </a>
            </p>
            <p style={{ marginTop: "8px" }}>
              Payment Status : {data?.paid ? "Paid" : "Pending Payment"}
            </p>
          </Box>
        </Box>
        <Box id="rsvp">
          <Box>
            <p style={{ marginTop: "8px" }}>
              Total Respondant :{" "}
              <span style={{ fontSize: "18px", fontWeight: "700" }}>
                {rsvpData?.length!}
              </span>
            </p>
            <p style={{ marginTop: "8px" }}>
              Total Pax :{" "}
              <span style={{ fontSize: "18px", fontWeight: "700" }}>
                {totalPax}
              </span>
            </p>
          </Box>
          <Box mt={2}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Attendance</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Total Pax</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rsvpData?.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell>
                        {item?.attendance === "true"
                          ? "Attending"
                          : "Not Attending"}
                      </TableCell>
                      <TableCell>{item?.name}</TableCell>
                      <TableCell>{item?.phoneNumber}</TableCell>
                      <TableCell>
                        {item?.attendance === "true" ? item?.pax : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </BoxContainer>
  );
};

export default AdminModule;
