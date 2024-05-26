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

interface MyWorkProps {
  userAssets: EInviteConfig[];
}

const MyWork: React.FC<MyWorkProps> = ({ userAssets }) => {
  return (
    <Box>
      <p style={{ fontSize: "20px", fontWeight: "700" }}>My work</p>
      <Box mt={4}></Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "700" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Created At</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Url address</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>RSVP Dashboard</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userAssets?.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>
                    {item.paid ? "Paid" : "Pending Payment"}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>
                    <a
                      style={{
                        color: "unset",
                        textDecoration: "none",
                      }}
                      target="__blank"
                      href={`/e-invite/live/${item.name}`}
                    >{`/e-invite/live/${item.name}`}</a>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700" }}>
                    <a
                      style={{
                        background: "#eeece1",
                        borderRadius: "20px",
                        color: "unset",
                        padding: "8px 16px",
                        textDecoration: "none",
                      }}
                      target="__blank"
                      href={`/e-invite/admin/${item.name}`}
                    >RSVP
                    </a>
                    </TableCell>
                  <TableCell>
                    {!item.paid && (
                      <a
                        href={`https://wa.me/601156271776?text=Hi%20Pulpen%20Studio%20,%20saya%20ingin%20membuat%20bayaran%20untuk%20-%20Digital%20Card:%20${item.name}%20User%20ID:${item.userId}`}
                        target="__blank"
                        style={{
                          background: "#eeece1",
                          borderRadius: "8px",
                          color: "unset",
                          textDecoration: "none",
                          padding: "4px 16px",
                        }}
                      >
                        Pay
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyWork;
