import {
  Button,
  Dimmer,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Search,
  Segment,
  Image,
  Loader,
  Placeholder,
  List
} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Find Country
              </Header>

              <Search placeholder='Search countries...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='file pdf outline' />
                Tambah Dokumen Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' width='40%' height='60' />
      </Segment>
      <Grid relaxed>
        <GridRow>
          <GridColumn width={5}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </GridColumn>
          <GridColumn width={7}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </GridColumn>
          <GridColumn width={4}>
            <h3>Website Terkait</h3>
            <List>
              <List.Item as='a'><Icon name='linkify' /> Google</List.Item>
              <List.Item as='a'><Icon name='linkify' /> Facebook</List.Item>
              <List.Item as='a'><Icon name='linkify' /> Semantic UI</List.Item>
              <List.Item as='a'><Icon name='linkify' /> Niomic</List.Item>
              <List.Item as='a'><Icon name='linkify' /> React</List.Item>
            </List>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default App;
