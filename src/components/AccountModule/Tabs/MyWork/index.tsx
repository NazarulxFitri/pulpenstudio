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
                  <TableCell>
                    <a
                      style={{
                        color: "unset",
                        textDecoration: "none",
                      }}
                      target="__blank"
                      href={`/e-invite/live/${item.name}`}
                    >{`/e-invite/live/${item.name}`}</a>
                  </TableCell>
                  <TableCell>
                    {!item.paid && (
                      <a
                        href=""
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
